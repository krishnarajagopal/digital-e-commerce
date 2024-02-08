import React from 'react'
import { ADD_TO_CART , REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} from '../_context/CartActions.js';
const CartReducer = (state, action) => {

        switch(action.type){
                case GET_CART_ITEMS:
                        return{
                                ...state,
                                cart:[...state.cart,{attributes:action.payload}],
                        }
                
                case ADD_TO_CART:
                        return{
                                
                        };

                case REMOVE_FROM_CART:
                        return{
                                
                        };

                case CLEAR_CART:
                        return{
                                
                        };

                case INCREASE_QUANTITY:
                        return{
                                
                        };
                        
                case DECREASE_QUANTITY:
                        return{
                                
                        };

                default:
                        return state;
        
        }
        
}

export default CartReducer