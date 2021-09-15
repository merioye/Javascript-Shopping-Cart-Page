let cartItems = document.querySelector('#child-container1 h1');

let firstProduct = document.querySelector('#first-item');
let firstDecrementBtn = document.querySelector('#first-item-minus');
let firstIncrementBtn = document.querySelector('#first-item-plus');
let firstItemQty = document.querySelector('#first-item-quantity');
let firstProductRemoveBtn = document.querySelector('#first-item-remove-btn');
let firstProductPrice = document.querySelector('#first-item-price p');

let secondProduct = document.querySelector('#second-item');
let secondDecrementBtn = document.querySelector('#second-item-minus');
let secondIncrementBtn = document.querySelector('#second-item-plus');
let secondItemQty = document.querySelector('#second-item-quantity');
let secondProductRemoveBtn = document.querySelector('#second-item-remove-btn');
let secondProductPrice = document.querySelector('#second-item-price p');

let productTotalPrice = document.querySelector('#product-amount-number p');
let shippingPrice = document.querySelector('#shipping-amount-number p');
let productPlusShippingPrice = document.querySelector('#product-plus-shipping-amount-number p');

let discountSection = document.querySelector('#discount-code-section');
let discountSectionHeading = document.querySelector('#discount-code-heading');
let discountInputField = document.querySelector('#discount-code-input-field');
let discountCode = document.querySelector('#discount-code-input p');
let discountApplyBtn = document.querySelector('#apply-coupon-btn');




// Variables that includes (Common Variables for both Products)
let product1_price = 0;
let product2_price = 0;
let whole_price = 0;
let quantity_no1 = 0;
let quantity_no2 = 0;
let product_plus_shipping_price = 0;
let total_cart_items = 2;






// Products Section Javascript Start Here
const incrementFirst = ()=>{
    if(quantity_no1>=5){
        alert('Max 5 items allowed');
        firstItemQty.classList.add('red-bg');
    }else{
        firstItemQty.classList.remove('red-bg');
        quantity_no1 = quantity_no1+1;
        product1_price = product1_price+15;
        if(quantity_no1==5){
            whole_price = whole_price+product1_price+50;
        }else{
            whole_price = whole_price+product1_price;
        }
        firstItemQty.textContent = quantity_no1;
        firstProductPrice.textContent = '$ '+product1_price;
        productTotalPrice.textContent = '$ '+(product1_price+product2_price);
        product_plus_shipping_price = product1_price+product2_price+50;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;

    }
}


const decrementFirst = ()=>{
    if(quantity_no1==0){
        alert('Product quantity cannot be negative');
        firstItemQty.classList.add('red-bg');
    }else{
        firstItemQty.classList.remove('red-bg');
        quantity_no1 = quantity_no1-1;
        product1_price = product1_price-15;
        if(quantity_no1==0){
            whole_price = whole_price-product1_price-50;
        }else{
            whole_price = whole_price-product1_price;
        }
        firstItemQty.textContent = quantity_no1;
        firstProductPrice.textContent = '$ '+(product1_price);
        productTotalPrice.textContent = '$ '+(product1_price+product2_price);
        if(quantity_no1==0 & quantity_no2==0){
            product_plus_shipping_price = product1_price+product2_price;
            productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
        }else{
            product_plus_shipping_price = product1_price+product2_price+50
            productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
        }
    }
}



const incrementSecond = ()=>{
    if(quantity_no2>=5){
        alert('Max 5 items allowed');
        secondItemQty.classList.add('red-bg');
    }else{
        secondItemQty.classList.remove('red-bg');
        quantity_no2 = quantity_no2+1;
        product2_price = product2_price+15;
        if(quantity_no2==5){
            whole_price = whole_price+product2_price+50;
        }else{
            whole_price = whole_price+product2_price;
        }
        secondItemQty.textContent = quantity_no2;
        secondProductPrice.textContent = '$ '+product2_price;
        productTotalPrice.textContent = '$ '+(product1_price+product2_price);
        product_plus_shipping_price = product1_price+product2_price+50;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;

    }
}



const decrementSecond = ()=>{
    if(quantity_no2==0){
        alert('Product quantity cannot be negative');
        secondItemQty.classList.add('red-bg');
    }else{
        secondItemQty.classList.remove('red-bg');
        quantity_no2 = quantity_no2-1;
        product2_price = product2_price-15;
        if(quantity_no2==0){
            whole_price = whole_price-product2_price-50;
        }else{
            whole_price = whole_price-product2_price;
        }
        secondItemQty.textContent = quantity_no2;
        secondProductPrice.textContent = '$ '+(product2_price);
        productTotalPrice.textContent = '$ '+(product1_price+product2_price);
        if(quantity_no2==0 & quantity_no1==0){
            product_plus_shipping_price = product1_price+product2_price;
            productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
        }else{
            product_plus_shipping_price = product1_price+product2_price+50;
            productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
        }
    }
}



firstIncrementBtn.addEventListener('click', incrementFirst);
firstDecrementBtn.addEventListener('click', decrementFirst);


secondIncrementBtn.addEventListener('click', incrementSecond);
secondDecrementBtn.addEventListener('click', decrementSecond);

// Products Sections Javascript Ends Here




// Discount Section Javascript Starts Here

const checkCoupon = ()=>{
    let value = discountInputField.value.trim();
    if(value=='hello'){
        
        if(product_plus_shipping_price!=0){
            discountCode.textContent = 'Hurray! code is valid';
            product_plus_shipping_price = product_plus_shipping_price-15;
            productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
        }else{
            discountCode.textContent = 'Sorry! please purchase any item first to get discount';
        }
        
    }else{
        discountCode.textContent = 'Try Again! Valid code is hello';
    }
}

discountApplyBtn.addEventListener('click', checkCoupon);

//Discount Section Javascript Ends here



// Remove Product Section Javascript Start Here

firstProductRemoveBtn.addEventListener('click', ()=>{
    firstProduct.style.display = 'none';
    total_cart_items = total_cart_items-1;
    cartItems.textContent = `Cart (${total_cart_items} items)`;
    product1_price = 0;
    quantity_no1 = 0;
    productTotalPrice.textContent = '$ '+(product1_price+product2_price);
    if(quantity_no2==0 & quantity_no1==0){
        product_plus_shipping_price = product1_price+product2_price;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
    }else{
        product_plus_shipping_price = product1_price+product2_price+50;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
    }
});

secondProductRemoveBtn.addEventListener('click', ()=>{
    secondProduct.style.display = 'none';
    total_cart_items = total_cart_items-1;
    cartItems.textContent = `Cart (${total_cart_items} items)`;
    product2_price = 0;
    quantity_no2 = 0;
    productTotalPrice.textContent = '$ '+(product1_price+product2_price);
    if(quantity_no2==0 & quantity_no1==0){
        product_plus_shipping_price = product1_price+product2_price;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
    }else{
        product_plus_shipping_price = product1_price+product2_price+50;
        productPlusShippingPrice.textContent = '$ '+ product_plus_shipping_price;
    }
});