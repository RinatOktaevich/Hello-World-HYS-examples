var _this = this;
var squarebasic = function (num) { return num * num; };
//Creating anonim object based on interface
var rc = {
    h: 5,
    w: 9
};
var squareIt = function (rect) {
    return rect.h * rect.w;
};
console.log("SquareIt is " + squareIt({ h: 5, w: 7 }));
//Another way to describe this function is ...
var squareIt2 = function () { return console.log("Square void " + squareIt({ h: 10, w: 2 })); };
squareIt2();
var p = {
    name: "Joah",
    age: 20,
    kids: 2,
    calcPets: function () { return _this.kids * 2; },
    makeYonger: function () { return _this.age -= 1; },
    greet: function (msg) { return msg + ', ' + _this.name; }
};
