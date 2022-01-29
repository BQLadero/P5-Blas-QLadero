'use strict';
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    InvalidValueException,
    AbstractClassException
} from './exceptions.js';

class Coords {
    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        if (!new.target) throw new InvalidAccessConstructorException();

        if (!latitude) throw new EmptyValueException("latitude");
        if (!longitude) throw new EmptyValueException("longitude");
        
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#title;
    }
    set latitude(value) {
        if (!value) throw new EmptyValueException("latitude");
        this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }
    set longitude(value) {
        if (!value) throw new EmptyValueException("longitude");
        this.#longitude = value;
    }
}

export { Coords };