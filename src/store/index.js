import { action, observable } from "mobx";
import { localStorageUtils } from "../utils";

class Store {
    @observable activeHeaderMenu = localStorageUtils.getItem('activeHeaderMenu') || '1';

    @action
    save = (propName, value) => {
        this[propName] = value;
        localStorageUtils.setItem(propName, value);
    }
}

export default new Store();