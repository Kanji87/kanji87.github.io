var timerView = (function () {
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

return TimerView;

}());

//# sourceMappingURL=timer-view.js.map
