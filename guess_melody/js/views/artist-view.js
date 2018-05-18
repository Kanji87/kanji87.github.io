var artistView = (function () {
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

return ArtistView;

}());

//# sourceMappingURL=artist-view.js.map
