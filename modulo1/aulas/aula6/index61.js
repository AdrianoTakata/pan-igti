function Retangulo (altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = function() {
        return this.altura * this.largura;
    }
}

var r1 = new Retangulo(4, 7);
var r2 = new Retangulo(4, 7);

console.log(r1.area === r2.area)

function RetanguloV2 (altura, largura) {
    this.altura = altura;
    this.largura = largura;
}

RetanguloV2.prototype.area = function() {
    return this.altura * this.largura;
};

var r3 = new RetanguloV2(4, 7);
var r4 = new RetanguloV2(4, 7);

console.log(r3.area === r4.area);