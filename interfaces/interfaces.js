"use strict";
// Interface Function
var pow;
pow = function (base, exp) { return Math.pow(base, exp); };
console.log(pow(3, 3));
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    ;
    return RealA;
}());
var RealB = /** @class */ (function () {
    function RealB() {
    }
    RealB.prototype.a = function () { };
    ;
    RealB.prototype.b = function () { };
    ;
    return RealB;
}());
var RealC = /** @class */ (function () {
    function RealC() {
    }
    RealC.prototype.a = function () { };
    ;
    RealC.prototype.b = function () { };
    ;
    RealC.prototype.c = function () { };
    ;
    return RealC;
}());
function teste(b) {
}
var AbstractedABD = /** @class */ (function () {
    function AbstractedABD() {
    }
    AbstractedABD.prototype.a = function () { };
    ;
    AbstractedABD.prototype.b = function () { };
    ;
    return AbstractedABD;
}());
teste(new RealC);
Object.prototype.log = function () {
    console.log(this.toString());
};
var x = 2;
var y = 3;
var z = 4;
x.log();
y.log();
z.log();
var cli = {
    nome: 'Pedro',
    toString: function () {
        return this.nome;
    }
};
cli.log();
