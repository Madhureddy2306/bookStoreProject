import React from 'react'

const BookStoreContext = React.createContext({
  cartList: [],
  addToCartList: () => {},
  removeFromCartList: () => {},
})

export default BookStoreContext
