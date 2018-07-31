module Classes {

    class Car {
        private _engine: string;

        constructor(engine: string) {
            this._engine = engine;
        }

        get engine(): string {
            return this._engine;
        }
        set engine(value: string) {
            if (value == undefined) throw 'Supply an  Engine';
            this._engine = value;
        }
    }
}


//Using Complex types
module ComplexTypes {

    class Engine {
        constructor(public horsePower: number, public engineType: string) { }
    }


    class Car {
        private _engine: Engine;

        constructor(engine: Engine) {
            this._engine = engine;
        }

        get engine(): Engine {
            return this._engine;
        }
        set engine(value: Engine) {
            if (value == undefined) throw 'Supply an  Engine';
            this._engine = value;
        }

    }


    //Init new object instanses using Complex types throw "new" keyword 
    var engine = new Engine(750, "AsyncMotor");
    var car = new Car(engine);




}