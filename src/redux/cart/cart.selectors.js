//Refer to node package 'reselect' documentation for selector information

//allows us to Memoize parts of our state. Only making it change if called upon specifically. Improves functionality.
import { createSelector } from 'reselect';

//input selector. Grabs all of our state and returns a single piece of it. In our case the cart
const selectCart = state => state.cart;

//uses create selector. select cart items is a property from our cart.
export const selectCartItems = createSelector(
    [selectCart], //first argument is an array of input selectors. input selectors mentioned above ^
    cart => cart.cartItems //second argument is a function which will return the value we want.
)

//returns the quantity of items in our cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);