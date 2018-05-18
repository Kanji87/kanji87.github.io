var lifebarView = (function () {
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

return LifebarView;

}());

//# sourceMappingURL=lifebar-view.js.map
