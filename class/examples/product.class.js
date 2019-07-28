"use strict";
var Product = /** @class */ (function () {
    function Product(name, price, discount) {
        var _this = this;
        if (discount === void 0) { discount = 0; }
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.resume = function () {
            console.log("Product " + _this.name + ", price is " + (_this.price - _this.discount));
        };
    }
    return Product;
}());
var productX = new Product('Arroz', 5);
var productY = new Product('Salsicha', 10, 2);
productX.resume();
productY.resume();
