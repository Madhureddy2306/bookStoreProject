import Header from '../Header'
import BookStoreContext from '../../StoreContext'
import {
  CartMainContainer,
  LoaderContainer,
  CartDetailsDiv,
  CartItemList,
  CartHeading,
  Span,
  HrLine,
  CartItem,
  CoverImg,
  DetailsDiv,
  NamePriceDiv,
  Name,
  Span2,
  NoItems,
  RemoveBtn,
  ShopButton,
  TotalPrice,
  CheckOutBtn,
} from './styledComponents'

const Cart = props => {
  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const renderLoading = () => (
    <LoaderContainer>
      <NoItems>No Items in Cart yet</NoItems>
      <Name>Continue shopping and add items to view cart</Name>
      <ShopButton onClick={goToHome}>Shop Now</ShopButton>
    </LoaderContainer>
  )

  const renderCartItem = (cartItem, removeFunc) => {
    const {coverImgUrl, name, price, authors, rating, bookId} = cartItem

    const sendTrigger = () => {
      removeFunc(bookId)
    }

    return (
      <>
        <CoverImg src={coverImgUrl} alt="cover image cart" />
        <DetailsDiv>
          <NamePriceDiv>
            <Name>
              Name : <Span2>{name}</Span2>
            </Name>
            <Name>
              Price : <Span2>{price} /- </Span2>
            </Name>
          </NamePriceDiv>
          <Name>
            Author : <Span2>{authors}</Span2>
          </Name>
          <Name>
            Rating : <Span2>{rating} stars</Span2>
          </Name>
          <RemoveBtn onClick={sendTrigger}>Remove from Cart</RemoveBtn>
        </DetailsDiv>
      </>
    )
  }

  return (
    <BookStoreContext.Consumer>
      {value => {
        const {cartList, removeFromCartList} = value

        const removeFromCart = bookId => {
          removeFromCartList(bookId)
        }

        const getTotalCost = () => {
          const priceList = cartList.map(each => each.price)
          const totalPrice = priceList.reduce(
            (current, total) => current + total,
          )
          return totalPrice
        }

        return (
          <CartMainContainer>
            <Header />
            <CartDetailsDiv>
              {cartList.length === 0 ? (
                renderLoading()
              ) : (
                <>
                  <CartHeading>
                    CART : <Span>{cartList.length} Items</Span>
                  </CartHeading>
                  <HrLine />
                  <CartItemList>
                    {cartList.map(each => (
                      <CartItem key={each.bookId}>
                        {renderCartItem(each, removeFromCart)}
                      </CartItem>
                    ))}
                  </CartItemList>
                  <TotalPrice>Total Price : {getTotalCost()}/- </TotalPrice>
                  <CheckOutBtn>Checkout</CheckOutBtn>
                </>
              )}
            </CartDetailsDiv>
          </CartMainContainer>
        )
      }}
    </BookStoreContext.Consumer>
  )
}

export default Cart
