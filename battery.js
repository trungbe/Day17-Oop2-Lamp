class Battery {
    constructor(energy) {
        this._energy = energy;
    }

    get energy() {
        return this._enegry;
    }

    set energy(value) {
        this._enegry = value;
    }
    decreaseEnergy(){
        if (this._energy > 0) {
            this._energy--;
        }
    }
}