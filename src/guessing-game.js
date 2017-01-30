class GuessingGame {
    constructor() {
        this._number = 0;
        this._min = 0;
        this._max = 0;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._number = Math.ceil((this._min + this._max)/2);
        return this._number;
    }

    lower() {
        this._max = this._number--;
    }

    greater() {
        this._min = this._number++;
    }
}

module.exports = GuessingGame;
