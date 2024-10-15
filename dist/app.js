"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./cart");
var cart = new cart_1.default();
cart.add({
    id: 1,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: 'фантастика, боевик, фэнтези',
    time: '',
});
console.log(cart.items);
//# sourceMappingURL=app.js.map