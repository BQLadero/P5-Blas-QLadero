'use strict';
import { BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    InvalidValueException,
    AbstractClassException } from './exceptions.js';
  
class Product{
    #serialNumber;
    #name;
    #price;
    #description;
    #tax;
    #images;
    constructor (serialNumber, name, price, description, tax = 0, images = []){
        if (!new.target) throw new InvalidAccessConstructorException();
        /*if (new.target === Product) throw new AbstractClassException("Product");*/

        if (!serialNumber) throw new EmptyValueException("serialNumber");
		if (!name) throw new EmptyValueException("name");
		price = Number.parseFloat(price);
		if (!price || price <= 0) throw new InvalidValueException("price", price);
        /*if (!description) throw new EmptyValueException("description");
		if (tax < 0) throw new InvalidValueException("taxPercentage", taxPercentage);
		if (!Array.isArray(images)) throw new InvalidValueException("images", images);*/

        this.#serialNumber = serialNumber;
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#tax = tax;
        this.#images = images;
    }
    
    get serialNumber(){
        return this.#serialNumber;
    }
    set serialNumber(value){
        if (!value) throw new EmptyValueException("serialNumber");
        this.#serialNumber = value;
    }
       
    get name(){
        return this.#name;
    }
    set name(value){
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
    }

    get price(){
        return this.#price;
    }
    set price(value){
        if (!value) throw new EmptyValueException("price");
        this.#price = value;
    }

    get description(){
        return this.#description;
    }
    set description(value){
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
    }

    get tax(){
        return this.#tax;
    }
    set tax(value){
        if (!value) throw new EmptyValueException("tax");
        this.#tax = value;
    }

    get images(){
        return this.#images;
    }
    set images(value){
        if (!Array.isArray(value)) throw new InvalidValueException("images", value);
        this.#images = value;
    }

    toString (){
		return "SerialNumber: " + this.serialNumber + " Nombre: " + this.name + " Precio: " + this.price + 
                " Descripción: " + this.description + " Tax: " + this.tax + " Images: " + this.images + ".";
	}
}
Object.defineProperty(Product.prototype, "serialNumber", {enumerable: true});
Object.defineProperty(Product.prototype, "name", {enumerable: true});
Object.defineProperty(Product.prototype, "price", {enumerable: true});
Object.defineProperty(Product.prototype, "description", {enumerable: true});
Object.defineProperty(Product.prototype, "tax", {enumerable: true});
Object.defineProperty(Product.prototype, "images", {enumerable: true, writable: true});

class Television extends Product{
    #display;
    #plataforma;
    #video;
    #audio;
    constructor (serialNumber, name, price, display, plataforma, video, audio, description, tax, images = []){
        super(serialNumber, name, price, description, tax, images);
        this.#display = display;
        this.#plataforma = plataforma;
        this.#video = video;
        this.#audio = audio;
    }

    get display(){
        return this.#display;
    }
    set display(value){
        if (!value) throw new EmptyValueException("display");
        this.#display = value;
    }
    get plataforma(){
        return this.#plataforma;
    }
    set plataforma(value){
        if (!value) throw new EmptyValueException("plataforma");
        this.#plataforma = value;
    }
    get video(){
        return this.#display;
    }
    set video(value){
        if (!value) throw new EmptyValueException("video");
        this.#video = value;
    }
    get audio(){
        return this.#audio;
    }
    set audio(value){
        if (!value) throw new EmptyValueException("audio");
        this.#audio = value;
    }

    toString (){
		return super.toString() + " Display: " + this.display + " Plataforma: " + this.plataforma + " Video: "
                 + this.video + " Audio: " + this.audio + ".";
	}
}
Object.defineProperty(Television.prototype, "display", {enumerable: true});
Object.defineProperty(Television.prototype, "plataforma", {enumerable: true});
Object.defineProperty(Television.prototype, "video", {enumerable: true});
Object.defineProperty(Television.prototype, "audio", {enumerable: true, writable: true});

class PS5 extends Product{
    #cpu;
    #gpu;
    #memoria;
    #disco;
    constructor (serialNumber, name, price, cpu, gpu, memoria, disco, description = "", tax = "", images = []){
        super(serialNumber, name, price, description, tax, images);
        this.#cpu = cpu;
        this.#gpu = gpu;
        this.#memoria = memoria;
        this.#disco = disco;
    }

    get cpu(){
        return this.#cpu;
    }
    set cpu(value){
        if (!value) throw new EmptyValueException("cpu");
        this.#cpu = value;
    }
    get gpu(){
        return this.#gpu;
    }
    set gpu(value){
        if (!value) throw new EmptyValueException("gpu");
        this.#gpu = value;
    }
    get memoria(){
        return this.#memoria;
    }
    set memoria(value){
        if (!value) throw new EmptyValueException("memoria");
        this.#memoria = value;
    }
    get disco(){
        return this.#disco;
    }
    set disco(value){
        if (!value) throw new EmptyValueException("disco");
        this.#disco = value;
    }

    toString (){
		return super.toString() + " CPU: " + this.cpu + " GPU: " + this.gpu + " Video: "
                 + this.video + " Disco: " + this.disco + ".";
    }
}
Object.defineProperty(PS5.prototype, "cpu", {enumerable: true});
Object.defineProperty(PS5.prototype, "gpu", {enumerable: true});
Object.defineProperty(PS5.prototype, "memoria", {enumerable: true});
Object.defineProperty(PS5.prototype, "disco", {enumerable: true, writable: true});

class Router extends Product{
    #conexion;
    #puerto;
    #antena;
    #peso;
    constructor (serialNumber, name, price, conexion, puerto, antena, peso, description = "", tax = "", images = []){
        super(serialNumber, name, price, description, tax, images);
        this.#conexion = conexion;
        this.#puerto = puerto;
        this.#antena = antena;
        this.#peso = peso;
    }

    get conexion(){
        return this.#conexion;
    }
    set conexion(value){
        if (!value) throw new EmptyValueException("conexion");
        this.#conexion = value;
    }
    get puerto(){
        return this.#puerto;
    }
    set puerto(value){
        if (!value) throw new EmptyValueException("puerto");
        this.#puerto = value;
    }
    get antena(){
        return this.#antena;
    }
    set antena(value){
        if (!value) throw new EmptyValueException("antena");
        this.#antena = value;
    }
    get peso(){
        return this.#peso;
    }
    set peso(value){
        if (!value) throw new EmptyValueException("peso");
        this.#peso = value;
    }

    toString (){
		return super.toString() + " Conexión: " + this.conexion + " Puerto: " + this.puerto + " Antena: "
                 + this.antena + " Peso: " + this.peso + ".";
    }
}
Object.defineProperty(Router.prototype, "conexion", {enumerable: true});
Object.defineProperty(Router.prototype, "puerto", {enumerable: true});
Object.defineProperty(Router.prototype, "antena", {enumerable: true});
Object.defineProperty(Router.prototype, "peso", {enumerable: true, writable: true});

export {Product, Television, PS5, Router};