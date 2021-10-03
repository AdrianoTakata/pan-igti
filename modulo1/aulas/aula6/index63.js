class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }

    imprimeNome () {
        console.log('Retangulo!!')
    }
}

var r1 = new Retangulo(3,4);
var r2 = new Retangulo(3,8);


console.log(r1.area())
console.log(r2.area())
console.log(r1.area === r2.area)

class Quadrado extends Retangulo {
    constructor(lado) {
        super(lado, lado);
    }

    imprimeNome () {
        console.log('Quadrado!')
    }
}

var r3 = new Quadrado(3);

console.log(r3.area())
r3.imprimeNome()