import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id && item.idProduct === action.payload.idProduct);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
        const {productId, productDetailId} = action.payload;
        const cart = state.cart
        // const selectedProduct = cart.filter((item) => item.id === productId);
        // console.log(selectedProduct)
        // // const result = selectedProduct.product_details?.slice(selectedProduct, productDetailId)
        // // console.log(result)
        // if(Array.isArray(selectedProduct?.product_details)) {
        //   selectedProduct.product_details = selectedProduct.product_details.filter(item => item.id !== productDetailId);
        //   return (selectedProduct.product_details)
        // }
        // state.cart = result
        // const removeItem = (selectedProduct).filter((item) => 
        //      item.idProduct === action.payload.productDetailId
            
        // );
        const removeItem = cart.filter((item) => !(item.id === productId && item.idProduct === productDetailId))
        state.cart = removeItem;

        
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;