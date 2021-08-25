//Logic for not replicating occurrences of items in the shopping cart. Add a number of a certain item instead of creating a new object for every time it's added.


export const addItemToCart = (cartItems, cartItemToAdd) => {
    //will find the first item in the list of items whose ID matches the ID just added.
    //Save that value as existing cart item
    //find() returns a boolean of true or false on the first element that returns true. It does not keep going once one element returns true.
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //if the item does already exist
    if (existingCartItem) {
        //return a new array  via map so that our state renders properly. 
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
    }

    //if there's no existing cart item. return cart items and a quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}