import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//Memoization - caching a selector's value so that objects are not unnecessarily rerendered upoon every state change
//"Reselect" package allows us to do this
// Example without memoization
/* const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
}); */

//example with memoization
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);