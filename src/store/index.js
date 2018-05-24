import { action, observable, computed, reaction } from "mobx";
import { localStorageUtils } from "../utils";
import axios from '../axios';

class Store {
    @observable user = {};
    @observable slider = localStorage.getItem('slider') === 'false' ? false : true;
    @observable activeDoc = localStorage.getItem('activeDoc') || 'helloWorld';
    
    @action
    setSlider(value) {
        this.preSlider = this.slider;
        this.slider = value;
        localStorage.setItem('slider', value);
    }

    @action
    setActiveDoc(value) {
        if (this.activeDoc !== value) {
            this.activeDoc = value;
        }
    }
        
    @action
    save = (propName, value, whetherToStore) => {
        this[propName] = value;
        whetherToStore && localStorageUtils.setItem(propName, value);
    }
}

const storeInstance = new Store;

export default storeInstance;