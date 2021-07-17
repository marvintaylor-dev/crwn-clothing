import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //No payload for this. Just toggling an option
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});