var gameScreen = (function () {
'use strict';

class Utils {
  static _shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static getRandomItems(num, arr) {
    let itemsArray = [...arr];
    Utils._shuffle(itemsArray);
    itemsArray = itemsArray.slice(0, num);
    return itemsArray;
  }

  static createTemplate(templateString) {
    const dummyWrap = document.createElement(`div`);
    dummyWrap.innerHTML = templateString.trim();
    return dummyWrap.firstChild;
  }

  static checkResponseStatus(response) {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`AbstactView нельзя присваивать`);
    }
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  get template() {
    throw new Error(`Необходим шаблон для вывода`);
  }

  render() {
    return Utils.createTemplate(this.template);
  }

  bind() {}
}

class TimerView extends AbstractView {
  constructor(state) {
    super();
    this.minutesLeft = state.minutesCount;
    this.secondsLeft = state.secondsCount;
  }

  get template() {
    return `
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${this.minutesLeft}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${this.secondsLeft}</span>
        </div>
        </svg>
      </div>
    `;
  }
}

class LifebarView extends AbstractView {
  constructor(state) {
    super();
    this.lifesLeft = state.lifeCount;
  }

  get template() {
    return `
    <div class="main-mistakes">
      ${new Array(3 - this.lifesLeft).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>
    `;
  }
}

class ArtistView extends AbstractView {
  constructor(state, data) {
    super();
    this.levels = data;
    this.level = state.level;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.levels[this.level - 1].correctAnswerSrc}"></audio>
              <button class="player-control"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <form class="main-list">
            ${this.levels[this.level - 1].artistList.map((level, index) => ArtistView._artistAnswerItem(level, index)).join(``)}
          </form>
        </div>
      </section>
    `;
  }

  onAnswer() {}

  bind() {
    const answersNode = this.element.querySelector(`.main-list`);
    answersNode.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answer = evt.target.closest(`.main-answer-wrapper`).querySelector(`.main-answer-preview`);
      const answerText = answer.getAttribute(`alt`);
      if (answerText === this.levels[this.level - 1].correctAnswerArtist) {
        this.onAnswer(true);
      } else {
        this.onAnswer(false);
      }
    });
  }

  static _artistAnswerItem(level, index) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="val-${index + 1}"/>
        <label class="main-answer" for="answer-${index + 1}">
          <img class="main-answer-preview" src="${level.image}"
              alt="${level.artist}" width="134" height="134">
          ${level.artist}
        </label>
      </div>
    `;
  }
}

class GenreView extends AbstractView {
  constructor(state, data) {
    super();
    this.levels = data;
    this.level = state.level;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title">Выберите ${this.levels[this.level - 1].correctAnswerGenre} треки</h2>
          <form class="genre">
            ${this.levels[this.level - 1].genreList.map((level, index) => GenreView._genreAnswerItem(level, index)).join(``)}
            <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
          </form>
        </div>
      </section>
    `;
  }

  onAnswer() {}

  bind() {
    const correctGenre = this.levels[this.level - 1].correctAnswerGenre;
    const checkboxesNode = this.element.querySelector(`.genre`);
    const submitButton = this.element.querySelector(`.genre-answer-send`);

    checkboxesNode.addEventListener(`change`, () => {
      let selectedCheckboxes = this.element.querySelectorAll(`.genre-answer input:checked`).length;
      submitButton.disabled = selectedCheckboxes ? false : true;
    });

    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answers = this.element.querySelectorAll(`.genre-answer input:checked`);
      let isCorrect = false;
      answers.forEach((answer) => {
        isCorrect = answer.value === correctGenre ? true : false;
      });

      this.onAnswer(isCorrect);
    });
  }

  static _genreAnswerItem(level, index) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${level.src}"></audio>
            <button class="player-control"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${level.genre}" id="a-${index + 1}">
        <label class="genre-answer-check" for="a-${index + 1}"></label>
      </div>
    `;
  }
}

class WelcomeView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.data = data;
  }

  get template() {
    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;${this.state.minutesCount} минут ответить на все вопросы.<br>
          Ошибиться можно ${this.state.lifeCount} раза.<br>
          Удачи!
        </p>
      </section>
    `;
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}

class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this._error = error;
  }

  get template() {
    return `
      <section class="main main--welcome">
        <h2 class="title main-title">Ошибка</h2>
        <p class="text main-text">${this._error}</p>
        <span role="button" tabindex="0" class="main-replay">Попробовать еще раз</span>
      </section>
    `;
  }

  bind() {
    const startButton = this.element.querySelector(`.main-replay`);
    startButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.loadGame();
    });
  }
}

class LoadingView extends AbstractView {
  get template() {
    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none; transform: translateY(-197px);"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#ff9749" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(204 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>
      </section>
    `;
  }
}

const gameData = {
  "stats": [{
    "lifeCount": 1,
    "minutesCount": 4,
    "secondsCount": 45,
    "level": 10,
    "points": 12,
    "answerCount": 0,
    "fastAnswerCount": 8,
    "date": 1526550143713
  }, {
    "lifeCount": 2,
    "minutesCount": 4,
    "secondsCount": `00`,
    "level": 10,
    "points": 15,
    "answerCount": 0,
    "fastAnswerCount": 8,
    "date": 1526628000658
  }, {
    "lifeCount": 1,
    "minutesCount": 4,
    "secondsCount": 26,
    "level": 10,
    "points": 11,
    "answerCount": 0,
    "fastAnswerCount": 7,
    "date": 1526628046173
  }, {
    "lifeCount": 1,
    "minutesCount": 3,
    "secondsCount": 32,
    "level": 10,
    "points": 11,
    "answerCount": 0,
    "fastAnswerCount": 7,
    "date": 1526628156335
  }, {
    "lifeCount": 3,
    "minutesCount": 4,
    "secondsCount": 49,
    "level": 10,
    "points": 20,
    "answerCount": 0,
    "fastAnswerCount": 10,
    "date": 1526628195714
  }, {
    "lifeCount": 2,
    "minutesCount": 4,
    "secondsCount": 54,
    "level": 10,
    "points": 16,
    "answerCount": 0,
    "fastAnswerCount": 9,
    "date": 1526628211839
  }],
  "questions": [{
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/fdf1d65ec2bb5a6112228613aefc79382d3a993e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Math_-_20100122151057551.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Math`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Kevin MacLeod`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/46d5fd9d4ecfd75f0fd7e43decffbef78bc85169`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Tours_-_20120822132441990.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Tours`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Quantum_Jazz_-_20120509113401114.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Quantum Jazz`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Stephan_Siebert_-_20160712113333691.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Stephan Siebert`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все электрические песни`,
    "genre": `electronic`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/c86947d494e359fef9a7a27077494f7d7709f963`,
      "genre": `electronic`
    }, {
      "src": `https://freemusicarchive.org/music/listen/fdf1d65ec2bb5a6112228613aefc79382d3a993e`,
      "genre": `rock`
    }, {
      "src": `https://freemusicarchive.org/music/listen/3d9d618bd8e049df221143be059cf4910310e5b7`,
      "genre": `hip-hop`
    }, {
      "src": `https://freemusicarchive.org/music/listen/69d51e9f2db20c422e2ef437a71bff29f590d08d`,
      "genre": `classical`
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/a516e82844b87d2f359bdb40c4f6752622d55dc8`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Waylon Thornton`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Comfort_Fit_-_20091216190305442.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Comfort Fit`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/7efd792f96e739e459d6e7588d97bf684569836e`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/a516e82844b87d2f359bdb40c4f6752622d55dc8`,
      "genre": `pop`
    }, {
      "src": `https://freemusicarchive.org/music/listen/c86947d494e359fef9a7a27077494f7d7709f963`,
      "genre": `electronic`
    }, {
      "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
      "genre": `folk`
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/ccb4ba12f2a733d602477dfda3526d4e1350140c`,
      "genre": `rock`
    }, {
      "src": `https://freemusicarchive.org/music/listen/caaf4f0cc9b65d9d0a72d6729bdf60a9ab8d0234`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/524255a73d3bb70cd4b5a5830eda003ebc766a65`,
      "genre": `jazz`
    }, {
      "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
      "genre": `folk`
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/c62cee2f3849bdfb0f217a520eba306c3c7aca1e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Comfort_Fit_-_20091216190305442.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Comfort Fit`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/albums/Gillicuddy_-_Plays_Guitar_Again_-_20170725110900215.jpg?width=290&height=290`,
        "width": 290,
        "height": 290
      },
      "title": `Gillicuddy`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Paper Navy`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/albums/Gillicuddy_-_Plays_Guitar_Again_-_20170725110900215.jpg?width=290&height=290`,
        "width": 290,
        "height": 290
      },
      "title": `Gillicuddy`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/7efd792f96e739e459d6e7588d97bf684569836e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Jahzzar_-_20160323124322227.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Jahzzar`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Michael_Chapman__The_Woodpiles_-_2012081323009192.jpg?width=290&height=290`,
        "width": 300,
        "height": 300
      },
      "title": `Michael Chapman & The Woodpiles`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Paper Navy`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/69d51e9f2db20c422e2ef437a71bff29f590d08d`,
      "genre": `classical`
    }, {
      "src": `https://freemusicarchive.org/music/listen/74db98f738850f46875b1a7e797ec6edfd963086`,
      "genre": `jazz`
    }, {
      "src": `https://freemusicarchive.org/music/listen/caaf4f0cc9b65d9d0a72d6729bdf60a9ab8d0234`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/46d5fd9d4ecfd75f0fd7e43decffbef78bc85169`,
      "genre": `electronic`
    }]
  }]
};

const INITIAL_STATE = Object.freeze({
  lifeCount: 3,
  minutesCount: 5,
  secondsCount: `0${0}`,
  level: 1,
  points: 0,
  answerCount: 0,
  fastAnswerCount: 0
});

class GameModel {
  constructor(data) {
    this.levels = data;
    this._state = Object.assign({}, INITIAL_STATE);
  }

  get hasNextLevel() {
    return this.levels[this._state.level] !== void 0;
  }

  get state() {
    return this._state;
  }

  get isTimeEnd() {
    return !this._state.minutesCount && this._state.secondsCount === `00`;
  }

  get isLifeEnd() {
    return this._state.lifeCount <= 0;
  }

  get getStats() {
    return gameData.stats;
  }

  increaseLevel() {
    return this._state.level++;
  }

  timer() {
    if (this._state.secondsCount > 0) {
      this._state.secondsCount = this._state.secondsCount < 10 ? `0${this._state.secondsCount - 1}` : this._state.secondsCount - 1;
    } else {
      this._state.secondsCount = 59;

      if (this._state.minutesCount > 0) {
        this._state.minutesCount--;
      } else {
        this._state.minutesCount = 0;
      }
    }
  }

  static buildArtistLevel(dataObj) {
    const artistList = [];
    for (let answer of dataObj.answers) {
      const artist = {
        artist: answer.title,
        image: answer.image.url,
        name: answer.title
      };
      artistList.push(artist);
    }
    return artistList;
  }

  static buildGenrelevel(dataObj) {
    const genreList = [];
    for (let answer of dataObj.answers) {
      const genreItem = {
        genre: answer.genre,
        src: answer.src
      };
      genreList.push(genreItem);
    }
    return genreList;
  }

  static levelsAdapter(data) {
    const levelsArray = [];
    for (let dataItem of data) {
      const levelData = {};
      levelData.correctAnswerNum = 0;
      if (dataItem.type === `artist`) {
        levelData.type = dataItem.type;
        levelData.artistList = GameModel.buildArtistLevel(dataItem);
        levelData.correctAnswerSrc = dataItem.src;
        levelData.correctAnswerArtist = levelData.artistList[0].artist;
      } else {
        levelData.type = dataItem.type;
        levelData.genreList = GameModel.buildGenrelevel(dataItem);
        levelData.correctAnswerSrc = levelData.genreList[0].src;
        levelData.correctAnswerGenre = levelData.genreList[0].genre;
      }
      levelsArray.push(levelData);
    }
    return levelsArray;
  }

  static playerPlaceEndings(num) {
    let ending;
    if (num % 100 === 13) {
      ending = `-ое`;
    } else if (num % 10 === 3) {
      ending = `-е`;
    } else {
      ending = `-ое`;
    }
    return ending;
  }

  static showPlayerResult(arr, playerResult) {
    if (playerResult.lifeCount === 0) {
      return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    } else if (playerResult.timeCount === 0) {
      return `Время вышло! Вы не успели отгадать все мелодии`;
    } else {
      const results = [...arr];
      results.push(playerResult.points);
      results.sort((a, b) => {
        return b - a;
      });
      const playersCount = results.length - 1;
      const playerPlace = results.indexOf(playerResult.points) + 1;
      const playerRating = Math.floor((playersCount - playerPlace) / playersCount * 100);
      return `Вы заняли ${playerPlace}${GameModel.playerPlaceEndings(playerPlace)} место из ${playersCount} игроков. Это лучше, чем у ${playerRating}% игроков`;
    }
  }
}

const ROOT_NODE = document.querySelector(`.app`);

class App {
  static loadGame() {
    const loadView = new LoadingView();
    App._changeViewTo(loadView.element);
    const levels = GameModel.levelsAdapter(gameData.questions);
    App.showWelcome(levels);
  }

  static showWelcome(data) {
    const welcome = new WelcomeView(new GameModel().state, data);
    App._changeViewTo(welcome.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    App._changeViewTo(errorView.element);
  }

  static runGame(data) {
    const gameScreen = new GameScreen(new GameModel(data));
    App._changeViewTo(gameScreen.element);
    gameScreen.goToNextLevel();
  }

  static showLoseResult() {
    const result = new LoseView(new GameModel().state);
    App._changeViewTo(result.element);
  }

  static _changeViewTo(element) {
    ROOT_NODE.innerHTML = ``;
    ROOT_NODE.appendChild(element);
  }
}

class LoseView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Какая жалость!</h2>
        <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `;
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}

class TimoutView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Увы и ах!</h2>
        <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `;
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}

class ResultView extends AbstractView {
  constructor(state, data, results) {
    super();
    this.state = state;
    this.data = data;
    this._results = results;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;${4 - this.state.minutesCount}&nbsp;минуты и ${60 - this.state.secondsCount}&nbsp;секунд
          <br>вы&nbsp;набрали ${this.state.points} баллов (${this.state.fastAnswerCount} быстрых)
          <br>совершив ${3 - this.state.lifeCount} ошибки</div>
        <span class="main-comparison">${GameModel.showPlayerResult(this._results, this.state)}</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `;
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);
    replay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      App.runGame(this.data);
    });
  }
}

class GameScreen {
  constructor(model) {
    this.model = model;
    this._answerReward = 0;

    this.timer = new TimerView(this.model.state);
    this.lifebar = new LifebarView(this.model.state);
    this.content = this.isArtistLevel ? new ArtistView(this.model.state, this.model.levels) : new GenreView(this.model.state, this.model.levels);

    this.gameContent = document.createElement(`div`);
    this.gameContent.classList.add(`main`);
    this.gameContent.appendChild(this.content.element);
    this.gameContent.appendChild(this.timer.element);
    this.gameContent.appendChild(this.lifebar.element);

    this._interval = null;
  }

  get element() {
    return this.gameContent;
  }

  get isArtistLevel() {
    return this.model.levels[this.model.state.level - 1].type === `artist`;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  showResult(result) {
    this.gameContent.innerHTML = ``;
    this.gameContent.appendChild(result.element);
  }

  updateTimer() {
    if (this.model.isTimeEnd) {
      this.stopGame();
      const result = new TimoutView(this.model.levels);
      this.showResult(result);
      return;
    }

    const timer = new TimerView(this.model.state);
    this.gameContent.replaceChild(timer.element, this.timer.element);
    this.timer = timer;

    if (this.model.state.minutesCount === 0 && this.model.state.secondsCount < 30) {
      document.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
    }
  }

  updateLifebar() {
    const lifebar = new LifebarView(this.model.state);
    this.gameContent.replaceChild(lifebar.element, this.lifebar.element);
    this.lifebar = lifebar;
  }

  static _initAudioPlayer(element) {
    const playButtons = element.querySelectorAll(`.player-control`);
    playButtons.forEach((playButton) => {
      playButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const audio = evt.target.closest(`.player`).querySelector(`audio`);
        const audioPlayers = element.querySelectorAll(`audio`);
        if (audio.paused) {
          audioPlayers.forEach((audioPlayer) => {
            audioPlayer.pause();
            audioPlayer.closest(`.player`).querySelector(`.player-control`).classList.remove(`player-control--pause`);
          });
          audio.play();
          playButton.classList.add(`player-control--pause`);
        } else {
          audio.pause();
          playButton.classList.remove(`player-control--pause`);
        }
      });
    });

    if (document.querySelector(`.main--level-artist`)) {
      const artistPlayButton = document.querySelector(`.main--level-artist .player-control`);
      const artistAudio = document.querySelector(`.main--level-artist audio`);
      artistPlayButton.classList.add(`player-control--pause`);
      artistAudio.play();
    }
  }

  checkAnswer(answer) {
    if (answer) {
      if (this._answerReward === 2) {
        this.model.state.fastAnswerCount++;
      }
      this.model.state.points += this._answerReward;
    } else {
      this.model.state.points -= 2;
      this.model.state.lifeCount -= 1;
    }

    if (this.model.isLifeEnd) {
      this.stopGame();
      const result = new LoseView(this.model.levels);
      this.showResult(result);
      return;
    }

    if (this.model.hasNextLevel) {
      this.stopGame();
      this.model.increaseLevel();
      this.goToNextLevel();
    } else {
      this.stopGame();
      const gameResults = [];
      for (let dataItem of this.model.getStats) {
        gameResults.push(dataItem.points);
      }
      const result = new ResultView(this.model.state, this.model.levels, gameResults);
      this.showResult(result);
    }
  }

  goToNextLevel() {
    this._answerReward = 2;
    setTimeout(() => {
      this._answerReward = 1;
    }, 30000);
    this.changeLevel();
    this.updateLifebar();
    GameScreen._initAudioPlayer(this.content.element);
    this._interval = setInterval(() => {
      this.model.timer();
      this.updateTimer();
    }, 1000);
  }

  changeLevel() {
    const level = this.isArtistLevel ? new ArtistView(this.model.state, this.model.levels) : new GenreView(this.model.state, this.model.levels);
    level.onAnswer = this.checkAnswer.bind(this);
    this.changeView(level);
  }

  changeView(view) {
    this.gameContent.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

return GameScreen;

}());

//# sourceMappingURL=game-screen.js.map
