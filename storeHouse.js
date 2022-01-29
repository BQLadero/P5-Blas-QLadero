'use strict';
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    InvalidValueException,
    AbstractClassException
} from './exceptions.js';
import { Product, Television, PS5, Router } from 'products.js';
import { Category } from './category.js';
import { Store } from './store.js';

let StoreHouse = (function () {
    let instantiated;

    function init() {
        class StoreHouse {
            #name;
            #products = new Map();
            #categories = [];
            #shops = [];
            #stock = new Map();
            #catDefault;
            #shopDefault;
            constructor() {
                if (!new.target) throw new InvalidAccessConstructorException();
            }

            //Dado un product, devuelve la posición de ese product en el carrito o -1 si no lo encontramos.
            get name() {
                return this.#name;
            }
            set name(value) {
                if (!value) throw new EmptyValueException("name");
                this.#name = value;
            }

            //Devuelve un iterator de los products del carrito
            get products() {
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = this.#products;
                return {
                    *[Symbol.iterator]() {
                        for (let product of array) {
                            yield product;
                        }
                    }
                }
            }

            get categories() {
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = this.#categories;
                return {
                    *[Symbol.iterator]() {
                        for (let category of array) {
                            yield category;
                        }
                    }
                }
            }

            //Devuelve un iterator de las cantidades del carrito
            get shops() {
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = this.#shops;
                return {
                    *[Symbol.iterator]() {
                        for (let shop of array) {
                            yield shop;
                        }
                    }
                }
            }


            addProduct (product, category){
				if (!(product instanceof Product)) throw new Error ("El objecto Producto no es una instacia de producto");
                if (!(category instanceof Category)) throw new Error ("El objecto Category no es una instacia de category");
				if (!this.#products.has(product)){
					this.#products.set(product, category);
					this.#stock.set(product, 1);
				} else{
                    this.#products.forEach(function (value, key) {
                        if(!this.#value.has(category)){
                            this.#value.push(category);
                        }
                    });
                    let index = this.#stock.forEach(function (value, key) {
                        if(this.#stock.has(product)) return value; 
                    });
                    index++;
					this.#stock.set(product, index);
				}
				return this.#products.size();
			}

            removeProduct (product){
				if (!(product instanceof Product)) throw new Error ("El objecto Producto no es una instacia de producto");
                if (!this.#products.has(product)) throw new Error ("El producto no estaba introducido");
				this.#products.delete(product);
				return this.#products.size();
			}

            *[Symbol.iterator]() {
                for (let i = 0; i < this.#products.length; i++) {
                    yield {
                        product: this.#products[i],
                        quantity: this.#stock[i]
                    }
                }
            }
        }
        Object.defineProperty(ShoppingCart.prototype, "products", { enumerable: true });
        Object.defineProperty(ShoppingCart.prototype, "quantities", { enumerable: true });

        let sc = new ShoppingCart();//Devolvemos el objeto ShoppingCart para que sea una instancia única.
        Object.freeze(sc);
        return sc;
    } //Fin inicialización del Singleton
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //Si ya está asignado devuelve la asignación.
        }
    };
})();


export { Store };