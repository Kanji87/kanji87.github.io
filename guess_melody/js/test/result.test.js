(function (chai) {
'use strict';

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

const testPlayerResult1 = {
  points: 20,
  lifeCount: 2,
  timeCount: 10
};
const testPlayerResult2 = {
  points: 14,
  lifeCount: 1,
  timeCount: 10
};
const testPlayerResult3 = {
  points: 16,
  lifeCount: 1,
  timeCount: 10
};
const losePlayerResult = {
  points: 5,
  lifeCount: 0,
  timeCount: 40
};
const timeCountPlayerResult = {
  points: 15,
  lifeCount: 2,
  timeCount: 0
};

const testResults1 = [20, 15, 1, 6, 12, 18];
const testResults2 = [0, 0, 0, 0, 0, 0];
const testResults3 = [10, 15, 1, 6, 12, 18];
const testResults4 = [20, 20, 20, 20, 20, 20];

const resultStrings = {
  lifeEnded: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  timeEnded: `Время вышло! Вы не успели отгадать все мелодии`,
  fourthPlace: `Вы заняли 4-ое место из 6 игроков. Это лучше, чем у 33% игроков`,
  thirdPlace: `Вы заняли 3-е место из 6 игроков. Это лучше, чем у 50% игроков`,
  firstPlace: `Вы заняли 1-ое место из 6 игроков. Это лучше, чем у 83% игроков`
};

describe(`playerResult function`, () => {
  it(`expect lose string`, () => {
    chai.expect(GameModel.showPlayerResult(testResults1, losePlayerResult)).to.have.string(resultStrings.lifeEnded);
  });
  it(`expect timeCount string`, () => {
    chai.expect(GameModel.showPlayerResult(testResults1, timeCountPlayerResult)).to.have.string(resultStrings.timeEnded);
  });
  it(`expect win string`, () => {
    chai.expect(GameModel.showPlayerResult(testResults1, testPlayerResult2)).to.be.a.string(resultStrings.fourthPlace);
  });
  it(`expect 3 place win string`, () => {
    chai.expect(GameModel.showPlayerResult(testResults1, testPlayerResult3)).to.be.a.string(resultStrings.thirdPlace);
  });
  it(`expect top win string in loser array`, () => {
    chai.expect(GameModel.showPlayerResult(testResults2, testPlayerResult2)).to.be.a.string(resultStrings.firstPlace);
  });
  it(`expect top win string in normal array`, () => {
    chai.expect(GameModel.showPlayerResult(testResults3, testPlayerResult1)).to.be.a.string(resultStrings.firstPlace);
  });
  it(`expect top win string in top rated players array`, () => {
    chai.expect(GameModel.showPlayerResult(testResults4, testPlayerResult1)).to.be.a.string(resultStrings.firstPlace);
  });
});

}(chai));

//# sourceMappingURL=result.test.js.map
