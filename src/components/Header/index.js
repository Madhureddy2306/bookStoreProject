import {Link} from 'react-router-dom'
import {GrCart} from 'react-icons/gr'
import BookStoreContext from '../../StoreContext'
import './index.css'
import {
  HeaderMainContainer,
  LogoContainer,
  WebsiteLogo,
  BookStoreHeading,
  CartCount,
  CartLogOutBtnDiv,
  LogOutBtn,
} from './styledComponents'

const Header = () => (
  <BookStoreContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <HeaderMainContainer>
          <LogoContainer>
            <Link to="/" className="link">
              <WebsiteLogo
                src="https://img.freepik.com/free-vector/isolated-bundle-books_1308-46573.jpg?w=900&t=st=1699946600~exp=1699947200~hmac=5e4411a62be41f1ac5bf8f39a5003af0e1ab0ce5e45e5e7bf0789d0f5f396b3c"
                alt="website logo"
              />
            </Link>
          </LogoContainer>
          <BookStoreHeading>BookStore.in</BookStoreHeading>
          <CartLogOutBtnDiv>
            <Link to="/cart" className="link">
              <GrCart className="cart-icon" />
              <CartCount>{cartList.length}</CartCount>
            </Link>
            <LogOutBtn className="btn">Logout</LogOutBtn>
          </CartLogOutBtnDiv>
        </HeaderMainContainer>
      )
    }}
  </BookStoreContext.Consumer>
)

export default Header
