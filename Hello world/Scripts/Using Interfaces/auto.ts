module UsingInterfaces {

    interface IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void): void;
        stop(callback: (startStatus: boolean, engineType: string) => void): void;

    }


    class Engine implements IEngine {
        constructor(public horsePower: number, public engineType: string) { }


        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(() => {
                callback(true, this.engineType);
            }, 1000);
        }


        stop(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(() => {
                callback(true, this.engineType);
            }, 1000);
        }

    }


    class CustomEngine implements IEngine {

        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(() => {
                callback(true, "Лютый кастом");
            }, 1000);
        }


        stop(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(() => {
                callback(true, "Лютый кастом");
            }, 1000);
        }


    }


    class Accessory {
        constructor(public accessoryNumber: number, public tittle: string) { }
    }


    class Auto {
        private _basePrice: number;
        private _engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
        accessoryList: string;

        constructor(basePrise: number, engine: IEngine, make: string, model: string, state: string, year: number) {
            this.basePrice = basePrise;
            this.engine = engine;
            this.state = state;
            this.make = make;
            this.model = model;
            this.year = year;
        }

        get basePrice(): number {
            return this._basePrice;
        }

        set baseprice(value: number) {
            if (value > 0)
                this._basePrice = value;
        }

        get engine(): IEngine {
            return this._engine;
        }

        set engine(value: IEngine) {
            if (value === undefined) throw "Supply the Engine";
            this._engine = value;
        }
    }


    class Track extends Auto {
        bedLenght: string;
        fourByFour: boolean;

        constructor(basePrise: number, engine: IEngine, make: string, model: string, state: string, year: number, bedLenght: string, fourByFour) {

            super(basePrise, engine, make, model, state, year);

            this.bedLenght = bedLenght;
            this.fourByFour = fourByFour;
        }
    }

    window.onload = () =>
    {
        var auto = new Auto(40000, new Engine(750, "V8"), "make", "Model", "sdad", 2015);
        var myEngine = <Engine>auto.engine;
        alert(myEngine.horsePower.toString());
    }

}


module ExtendingAnInterface {

    interface IAutoOptions {

        engine: string;
        basePrice: number;
    }

    interface ITruckOptions extends IAutoOptions{
        bedLenght: string;
        fourByFour: boolean;
    }

}
