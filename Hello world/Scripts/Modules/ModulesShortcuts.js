var App;
(function (App) {
    var Tools;
    (function (Tools) {
        var Shape;
        (function (Shape) {
            var Tongle = (function () {
                function Tongle() {
                }
                return Tongle;
            }());
            Shape.Tongle = Tongle;
        })(Shape = Tools.Shape || (Tools.Shape = {}));
    })(Tools = App.Tools || (App.Tools = {}));
})(App || (App = {}));
//lets make some shortcut for it 
var Shape = App.Tools.Shape;
var name = new Shape.Tongle().name;
//To refer to diferent file module use 
///reference path="***.ts" />
