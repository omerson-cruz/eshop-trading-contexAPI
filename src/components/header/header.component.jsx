import React , {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

//CONTEXT API Implementation
import CurrentUserContext from '../../contexts/current-user/current-user.contexts'
// import CartContext from '../../contexts/cart-context/cart-context'
import { CartContext } from '../../providers/cart/cart.provider'


// const Header = ({ hidden }) => {
const Header = () => {

  const currentUser = useContext(CurrentUserContext)

  const { hidden } = useContext(CartContext)

  // creating a "state" here so that we can pass this
  // to the child components
  // const [hidden, setHidden] = useState(true)

  // this "toggleHidden" will replace the toggleHidden inside of the
  // CurrentUserContext
  // const toggleHidden = () => setHidden(!hidden)


  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
          <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
)};

// const mapStateToProps = createStructuredSelector({
//   // currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });

// export default connect(mapStateToProps)(Header);
export default Header
