import { makeAutoObservable } from "mobx";

class Store {
    constructor(){
        makeAutoObservable(this)
    }
    count = 0;
    price = 0;
    store = [

    ]
    addElem(elem){
        this.count++;
        this.store.push(elem)
        JSON.parse(JSON.stringify(this.store))
    }
    removeElem(id){
        this.count--
        this.store = this.store.filter(prev => prev.id !== id)
    }
}
export default new Store();