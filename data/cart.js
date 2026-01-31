 export let cart=[{
  productId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
  quantity:2
 },
 {
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
 }];


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

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  });

  cart=newCart;
}