
/**
 * 
 * @param {*} key 
 * @param {*} dataa 
 */

function productsent(key, dataa){

    let data = JSON.stringify(dataa)
    localStorage.setItem(key, data)
 }

 /**
  * 
  * @param {*} data 
  * @returns 
  */
 function dataget(data){
     let datape = localStorage.getItem(data)
    return JSON.parse(datape)
 }