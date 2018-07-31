interface SquareFunc {
    (x: number ): number;
}

var squarebasic: SquareFunc =
    (num) => num * num;

//Now lets define interface for this function
interface Rectangle {
    h: number,
    w?: number;
}

//Creating anonim object based on interface
var rc: Rectangle = {
    h: 5,
    w: 9
};


var squareIt = function (
    rect: Rectangle) {
    return rect.h * rect.w;
}

console.log("SquareIt is " + squareIt({ h: 5, w: 7 }));

//Another way to describe this function is ...
var squareIt2 = () => console.log("Square void " + squareIt({ h: 10, w: 2 }));
squareIt2();
//console.log(


//Person interface

interface Person {
    name: string,
    age?: number,
    kids: number,
    calcPets: () => number;
    makeYonger: (years: number) => void;
    greet: (msg: string) => string;
}

var p: Person =
    {
        name: "Joah",
        age: 20,
        kids: 2,
        calcPets: () => this.kids * 2,
        makeYonger: () => this.age -= 1,
        greet: (msg: string) => msg + ', ' + this.name
    }


