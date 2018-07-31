//Objects
var points1 = { x: 10, y: 20 };
var x = points1.x;
var rectagle = {
    h: 10,
    w: 20,
    calcArea: function () {
        return this.h * this.w;
    }
};
console.log(rectagle.calcArea());
var squareIt = function (rect) {
    return rect.h * rect.w;
};
console.log("SquareIt is " + squareIt({ h: 5, w: 7 }));
//Another way to describe this function is ...
var squareIt2 = function () { return console.log("Square void " + squareIt({ h: 10, w: 2 })); };
squareIt2();
//console.log("SquareIt 2 is=>" + squareIt2(2,6)); 
