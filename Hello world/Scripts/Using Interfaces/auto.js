var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UsingInterfaces;
(function (UsingInterfaces) {
    var Engine = (function () {
        function Engine(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        Engine.prototype.start = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        Engine.prototype.stop = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return Engine;
    }());
    var CustomEngine = (function () {
        function CustomEngine() {
        }
        CustomEngine.prototype.start = function (callback) {
            window.setTimeout(function () {
                callback(true, "Лютый кастом");
            }, 1000);
        };
        CustomEngine.prototype.stop = function (callback) {
            window.setTimeout(function () {
                callback(true, "Лютый кастом");
            }, 1000);
        };
        return CustomEngine;
    }());
    var Accessory = (function () {
        function Accessory(accessoryNumber, tittle) {
            this.accessoryNumber = accessoryNumber;
            this.tittle = tittle;
        }
        return Accessory;
    }());
    var Auto = (function () {
        function Auto(basePrise, engine, make, model, state, year) {
            this.basePrice = basePrise;
            this.engine = engine;
            this.state = state;
            this.make = make;
            this.model = model;
            this.year = year;
        }
        Object.defineProperty(Auto.prototype, "basePrice", {
            get: function () {
                return this._basePrice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Auto.prototype, "baseprice", {
            set: function (value) {
                if (value > 0)
                    this._basePrice = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Auto.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value === undefined)
                    throw "Supply the Engine";
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        return Auto;
    }());
    var Track = (function (_super) {
        __extends(Track, _super);
        function Track(basePrise, engine, make, model, state, year, bedLenght, fourByFour) {
            _super.call(this, basePrise, engine, make, model, state, year);
            this.bedLenght = bedLenght;
            this.fourByFour = fourByFour;
        }
        return Track;
    }(Auto));
    window.onload = function () {
        var auto = new Auto(40000, new Engine(750, "V8"), "make", "Model", "sdad", 2015);
        var myEngine = auto.engine;
        alert(myEngine.horsePower.toString());
    };
})(UsingInterfaces || (UsingInterfaces = {}));
