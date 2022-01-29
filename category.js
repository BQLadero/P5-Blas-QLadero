'use strict';
import { BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    InvalidValueException,
    AbstractClassException } from './exceptions.js';

class Category {
    #title;
    #description;

    constructor (title, description){
        if (!new.target) throw new InvalidAccessConstructorException();

        if (!title) throw new EmptyValueException("title");
        
        this.#title = title;
        this.#description = description;
    }

    get title(){
        return this.#title;
    }
    set title(value){
        if (!value) throw new EmptyValueException("title");
        this.#title = value;
    }
       
    get description(){
        return this.#description;
    }
    set description(value){
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
    }
}

export {Category};