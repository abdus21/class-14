

function datasend(key,value){
    let data = JSON.stringify(value);
    localStorage.setItem(key,data)
};

function dataget(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data)
}