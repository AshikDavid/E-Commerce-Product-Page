document.addEventListener("DOMContentLoaded", function() {
const cartScreen=document.querySelector('.qunatity');
const imgScreen=document.querySelector('.img_1');
const selctImg=document.querySelectorAll('.img');
let onInCart;
const addToCart=document.querySelector('.add_cart');
//console.log(addToCart)

let InCartBuffer=0;
let cartBuffer=0;

function addElement(){
    const spanElement=document.createElement("span");
    const current=document.querySelector('.nav-cart');


    spanElement.className="cart--bubble";
    spanElement.innerText='0';

    current.appendChild(spanElement);

    onInCart=document.querySelector('.cart--bubble');
}
function buttonClick(value) {
   if((cartBuffer==0 && value==='decrement')||addToCart.innerText==='Go To Cart'){
    return;
   }
   if(value==='increment'){
    cartBuffer+=1;
   }
   else if(value==='decrement'){
    cartBuffer-=1;
   }
    cartScreen.innerText=cartBuffer;

}
function addCart(innerText){
   // console.log(InCartBuffer);
    if(InCartBuffer==0){
        addElement();
    }
    if(innerText=='Go To Cart'|| cartBuffer==0){
        return;
    }
    else {
        InCartBuffer+=1;
        onInCart.innerText=InCartBuffer;
        addToCart.lastChild.nodeValue="Go To Cart";
    }
    
    

}

function init() {

    document
    .querySelector(".item-quantity")
    .addEventListener("click", function (event) {
        buttonClick(event.target.value);
             
    });
    selctImg.forEach(image=>{
        image.addEventListener('click',function(event){
            selctImg.forEach(img=>img.classList.remove('img--selected'));
            this.classList.add('img--selected');
            imgScreen.src=event.target.src;

        })
    })
   /* document.querySelector(".prod_img")
    .addEventListener("click", function(event){
       // console.log(event.target);
            imgScreen.src=event.target.src;
    });*/
    document
    .querySelector('.add_cart')
    .addEventListener("click",function(event){
       // console.log(event.target.innerText)
        addCart(event.target.innerText);
    })
}

init();

});
