import $ from 'jquery';

export class BaseElement {
    
    constructor() {
        this.element = null;  // jQuery object
    }
    
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }
    
    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }
    
    enableJS() {
        //comes with js file loaded, part of material design lite
        componentHandler.upgradeElement(this.element[0]);
    }
}