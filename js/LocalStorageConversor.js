class LocalStorageConversor{
    static setItem(key,value){
        localStorage.setItem(key,value)
    }
    static getItem(key){
        return JSON.parse(localStorage.getItem(key));
    }
}