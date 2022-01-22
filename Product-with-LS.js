
/**
 * add product
 */
const add_product = document.querySelector('#add_product')
const product_box = document.querySelector('.product_box')
const close_btn = document.querySelector('#close_btn');




add_product.addEventListener('click', function(){
    product_box.style.display = 'block'
})

close_btn.addEventListener('click', function(){
    product_box.style.display = 'none'
})

/**
 * display product
 */
 const products_show = document.querySelector('#produ_list');
const add_form = document.getElementById('add_form');





add_form.addEventListener('submit', function(e){

    e.preventDefault();
    let pname = this.querySelector('input[name="productname"]').value;
    let prprice = this.querySelector('input[name="regprice"]').value;
    let psprice = this.querySelector('input[name="sale_price"]').value;
    let pphoto = this.querySelector('input[name="photolink"]').value;

    let product_arr;

     if(dataget('productss')){

        product_arr = dataget('productss');
    }else{
        product_arr = [];
    }
    product_arr.push({
        pname    : pname,
        prprice  : prprice,
        psprice  : psprice,
        pphoto   : pphoto
    })

    productsent('productss', product_arr);

    console.log(product_arr)
    all_data_show()
    pname = '';
    prprice = '';
    psprice = '';
    pphoto = '';

})








function all_data_show(){

    let productItem = dataget('productss');

    let pdata = '';
    productItem.map(data =>{
        pdata += ` <div class="col-md-3 my-3">
        <div class="card">
            <img class="card-img" src="${data.pphoto}">
            <div class="card-body">
                <h5>${data.pname}</h5>
                <p><span class="mr-1 regular_price"><del>৳${data.prprice}</del></span><span class="text-danger sale_price">৳${data.psprice}</span></p>
                <br>
                <button class="btn btn-success">Add to card</button>
            </div>
        </div>
    </div>`
    })
    products_show.innerHTML = pdata;
    
}



