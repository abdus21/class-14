
/**
 * add product
 */
const add_product = document.querySelector('#add_product')
const product_box = document.querySelector('.product_box')
const close_btn = document.querySelector('#close_btn');
const close_btnn = document.querySelector('#close_btnn');

add_product.addEventListener('click', function(){
    product_box.style = 'display:block'
})

close_btn.addEventListener('click', function(){
    product_box.style = 'display:none'
});



/**
 * add_form
 * produ_list
 */

const add_form = document.getElementById('add_form');
const produ_list = document.querySelector('#produ_list');
let massege = document.querySelector('.massege')

add_form.addEventListener('submit',function(e){
    e.preventDefault();

    let productname = this.querySelector('input[name="productname"]');
    let regprice = this.querySelector('input[name="regprice"]');
    let sale_price = this.querySelector('input[name="sale_price"]');
    let photolink = this.querySelector('input[name="photolink"]');
    let select = document.getElementById('select');

    /**
     * creat a Element
     */
    document.createElement('button')

    

    let product_arr;

    if(dataget('products')){
        product_arr = dataget('products');
    }else{
        product_arr = [];
    }

    product_arr.push({
        productname  : productname.value,
        regprice     : regprice.value,
        sale_price   : sale_price.value,
        photolink    : photolink.value,
        select       : select.value
    });

    datasend('products', product_arr)
    console.log()
    show_product()

    if(product_arr.select == 'out of stock'){
        massege.style.backgroundColor = 'red'
    }else if(select == 'Available'){
        massege.style.backgroundColor = '#232F3E'
    }else if(select == 'Beast sale'){
        massege.style.backgroundColor = 'yellow'
    }else{
        
    }

    product_arr.productname = '';
    product_arr.regprice = '';
    product_arr.sale_price = '';
    product_arr.photolink = '';
    product_arr.select = '';
 
})


show_product()
function show_product(){
    let all_product = dataget('products');
    
    let data = '';
    all_product.forEach(d =>{
    
        data += `<div class="col-md-3 my-3">
        <div class="card">
        <span class="massege">${d.select}</span>
        <button class="close close_btnn">&times;</button>
            <img class="card-img" src="${d.photolink}">
            <div class="card-body">
                <h5>${d.productname}</h5>
                <p><span class="mr-1 regular_price"><del>${d.regprice ?'৳' + d.regprice : d.regprice = '' }</del></span><span class="text-danger sale_price">৳${d.sale_price }</span></p>
                <br>
                <button class="btn btn-success">Add to card</button>
            </div>
        </div>
    </div>`
    })

    produ_list.innerHTML = data;
 
}



