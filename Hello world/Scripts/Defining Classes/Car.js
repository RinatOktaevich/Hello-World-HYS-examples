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
                throw "Supply the engine Engine";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("Engine started " + this.engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(750, "Tesla");
    var car = new Car(engine);
    alert("Car type " + car.engine.engineType);
    alert("Car power " + car.engine.horsePower);
    car.start();
};
