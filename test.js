import {Product, Television, PS5, Router} from './products.js';


let product1 = new Product(1,"Juan", 7.8);
product1.images = ['Pepe', 'Sebas'];
console.log(product1.toString());

let mapa = new Map();

mapa.set(0, ["pepe"]);

mapa.forEach(function (value, key) {
    let hola = value;
    console.log(hola);
    value.push("juan");
    mapa.set(key, value);
});
mapa.set(1, ["pepe"]);

for (let iterator of mapa) {
    console.log(iterator);
}