export const localStorageUtils = {
    setItem: (key, value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            if(e.name === 'QuotaExceededError'){
                console.log('超出本地存储限额！');
            }
        }
    },
    getItem: key => {
        const value = localStorage.getItem(key);
        if (value && value !== 'undefined') {
            return JSON.parse(value);
        } else {
            return null;
        }
    },
    clear: () => {
        localStorage.clear()
    }
};