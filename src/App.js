import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import BookStoreContext from './StoreContext/index'
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import Cart from './components/Cart'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addToCartList = bookInfo => {
    this.setState(pre => ({cartList: [...pre.cartList, bookInfo]}))
  }

  removeFromCartList = bookId => {
    const {cartList} = this.state

    const newList = cartList.filter(each => each.bookId !== bookId)
    console.log(newList)
    this.setState({cartList: newList})
  }

  render() {
    const {cartList} = this.state

    return (
      <BookStoreContext.Provider
        value={{
          cartList,
          addToCartList: this.addToCartList,
          removeFromCartList: this.removeFromCartList,
        }}>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book/:bookId" component={BookDetails} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </BookStoreContext.Provider>
    )
  }
}

export default App
