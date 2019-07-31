// Interface Function

interface CalcFunction {
    (a: number, b: number): number
}

let pow: CalcFunction

pow = (base: number, exp: number): number => Math.pow(base, exp);

console.log(pow(3, 3));

// Herança

//Tabela de relações
// Classe -> Interface = Implements
// Classe -> Classe = Extends
// Interface -> Interface = extends

// Quando a relação for entre classes se usa a palavra reservada extends
// quando a relação for entre classes e interface ou interface com interface se usa a palavra reservada implements

interface A {
    a():void;
}

interface B {
    b():void;
}

interface ABC extends A, B {
    c():void;
}

class RealA implements A {
    a():void{};
}

class RealB implements A, B {
    a():void{};
    b():void{};
}

class RealC implements ABC {
    a(): void {};
    b(): void {};
    c(): void {};
}

function teste(b: B) {

}

abstract class AbstractedABD implements A, B {
    a():void{};
    b():void{};
    abstract d(): void;
}

teste(new RealC)

// Extends Object

interface Object {
    log():void;
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
    nome: 'Pedro',
    toString() {
        return  this.nome
    }
}

cli.log()