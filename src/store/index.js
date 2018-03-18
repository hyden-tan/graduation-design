import { action, observable } from "mobx";
import { localStorageUtils } from "../utils";

class Store {
    @observable activeHeaderMenu = localStorageUtils.getItem('activeHeaderMenu') || '1';
    @observable doc = '';

    @action
    save = (propName, value, whetherToStore) => {
        this[propName] = value;
        whetherToStore && localStorageUtils.setItem(propName, value);
    }
}

export default new Store();