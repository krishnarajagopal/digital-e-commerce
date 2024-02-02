import React, { useReducer } from "react";
import { createContext } from "react";
import CartReducer from "./CartReducer";
import { ADD_TO_CART , GET_CART_ITEMS, REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} from "./CartActions";
import CartContext from "./CartContext";
import { useUser } from "@clerk/nextjs";

const CartState = (props) => {
const { isSignedIn, user } = useUser();

  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

// Get initial cart items
const getCartItems = (cartItems) => {
  isSignedIn && dispatch({
    type: GET_CART_ITEMS,
    payload: cartItems
  });

};

// Add to cart
const addToCart = (data) => {
  dispatch({
  type: ADD_TO_CART,
  payload: data,

})
}
// Remove from cart
const removeFromCart = (data) => {
  dispatch({
  type: REMOVE_FROM_CART,
  payload: data,
})
}
// Clear cart

const clearCart = () => {
  dispatch({
  type: CLEAR_CART,
})
}

// Increase quantity

// Decrease quantity



  return (
    <CartContext.Provider value={{
        cart: state.cart,
        getCartItems,
        addToCart,
        removeFromCart,
        clearCart,
}}>{props.children}</CartContext.Provider>
  );
};

export default CartState;
