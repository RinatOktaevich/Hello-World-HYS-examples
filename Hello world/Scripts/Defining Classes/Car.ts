class Engine {
    constructor(public horsePower: number, public engineType: string) { }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine)
    {
        this._engine = engine;
    }

    get engine(): Engine
    {
        return this._engine;
    }

    set engine(value: Engine) { 
        if (value == undefined) throw "Supply the engine Engine";

        this._engine = value;
    }

    start()
    {
        alert("Engine started " + this.engine.engineType);
    }



}

window.onload = function () {

    var engine = new Engine(750, "Tesla");
    var car = new Car(engine);

    alert("Car type " + car.engine.engineType);
    alert("Car power " + car.engine.horsePower);
    car.start();
    

}

