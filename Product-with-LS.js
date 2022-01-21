
/**
 * add product
 */
const add_product = document.querySelector('#add_product')
const product_box = document.querySelector('.product_box')
const close_btn = document.querySelector('#close_btn')

add_product.addEventListener('click', function(){
    product_box.style.display = 'block'
})

close_btn.addEventListener('click', function(){
    product_box.style.display = 'none'
})

/**
 * display product
 */

const products = document.querySelector('#produ_list');

let productItem = dataget('products');

productItem.map(data =>{
    products.innerHTML += ` <div class="col-md-3 my-3">
    <div class="card">
        <img class="card-img" src="${data.img}">
        <div class="card-body">
            <h5>${data.productName}</h5>
            <p><span class="mr-1 regular_price"><del>৳${data.price}</del></span><span class="text-danger sale_price">৳${data.sale}</span></p>
            <br>
            <button class="btn btn-success">Add to card</button>
        </div>
    </div>
</div>`
})



