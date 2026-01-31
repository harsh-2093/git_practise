 export const cart=[];


  export function addToCart(productId){
  const itemvalue=document.querySelector(`.add-cart-quantity-${productId}`).value;
  let matchingItem;

    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }
    });
    
    if(matchingItem){
      matchingItem.quantity+=Number(itemvalue);
    }
    else{
      cart.push({
      productId:productId,
      quantity:Number(itemvalue)
    });
    }
    console.log(cart);
     

}