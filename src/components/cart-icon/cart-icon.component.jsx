import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// CONTEXT API implementation
// import CartContext from '../../contexts/cart-context/cart-context'
import {CartContext} from '../../providers/cart/cart.provider'

// const CartIcon = ({ toggleCartHidden, itemCount }) => (
// const CartIcon = ({itemCount}) => {
const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext)

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      {/* <span className='item-count'>{itemCount}</span> */}
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  )
};

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(CartIcon);

export default CartIcon


