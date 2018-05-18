var loadingView = (function () {
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

return LoadingView;

}());

//# sourceMappingURL=loading-view.js.map
