var Classes;
(function (Classes) {
    var Car = (function () {
        function Car(engine) {
            this._engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value == undefined)
                    throw 'Supply an  Engine';
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        return Car;
    }());
})(Classes || (Classes = {}));
//Using Complex types
var ComplexTypes;
(function (ComplexTypes) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        return Engine;
    }());
    var Car = (function () {
        function Car(engine) {
            this._engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value == undefined)
                    throw 'Supply an  Engine';
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        return Car;
    }());
    //Init new object instanses using Complex types throw "new" keyword 
    var engine = new Engine(750, "AsyncMotor");
    var car = new Car(engine);
})(ComplexTypes || (ComplexTypes = {}));
