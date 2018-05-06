import { action, observable } from "mobx";
import { localStorageUtils } from "../utils";
import docs from '../assets/docs';

class Store {
    @observable user = {};
    @observable slider = localStorage.getItem('slider') === 'false' ? false : true;
    @observable doc = docs.helloWorld.content;
    
    @action
    setSlider(value) {
        this.slider = value;
        localStorage.setItem('slider', value);
    }

    @action
    save = (propName, value, whetherToStore) => {
        this[propName] = value;
        whetherToStore && localStorageUtils.setItem(propName, value);
    }
}

export default new Store();