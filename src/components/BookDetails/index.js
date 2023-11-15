import {Component} from 'react'
import {FaRegStar} from 'react-icons/fa'
import {ThreeDots} from 'react-loader-spinner'
import BookStoreContext from '../../StoreContext'
import Header from '../Header'
import {
  BookDetailsContainer,
  BooksDetailsSection,
  LoaderContainer,
  BookInfoContainer,
  CoverImgContainer,
  CoverImage,
  BookDetailsDiv,
  Span,
  BookName,
  Authors,
  PricePages,
  RatingDiv,
  AddToCartBtn,
} from './styledComponents'

class BookDetails extends Component {
  state = {
    bookInfo: [],
    loading: false,
  }

  componentDidMount() {
    this.getBookInfo()
  }

  getBookInfo = async () => {
    this.setState({loading: true})
    const {match} = this.props
    const {params} = match
    const {bookId} = params

    const url = `https://hapi-books.p.rapidapi.com/book/${bookId}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '53d8b91aa2msh3b716273dba93d2p11e4d6jsn17ad38a99cca',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      },
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      const camelCasedData = {
        authors: data.authors.filter(each => each !== ''),
        bookId: data.book_id,
        coverImgUrl: data.cover,
        name: data.name,
        pages: data.pages,
        publishedDate: data.published_date,
        rating: data.rating,
        synopsis: data.synopsis,
        price: parseInt(String(data.book_id).slice(0, 4)),
      }

      this.setState({bookInfo: camelCasedData, loading: false})
    } catch (error) {
      console.error(error)
    }
  }

  renderBookDetails = addToCartFunc => {
    const {bookInfo} = this.state
    const {authors, coverImgUrl, name, pages, publishedDate, rating, price} =
      bookInfo

    return (
      <BookInfoContainer>
        <CoverImgContainer>
          <CoverImage src={coverImgUrl} alt="book cover" />
        </CoverImgContainer>
        <BookDetailsDiv>
          <BookName>
            Name : <Span>{name}</Span>
          </BookName>
          <Authors>
            Author : <Span>{authors}</Span>
          </Authors>
          <RatingDiv>
            <Authors>
              Rating :{' '}
              <Span>
                {rating}
                <FaRegStar />
              </Span>
            </Authors>
          </RatingDiv>
          <PricePages>
            No.of Pages : <Span>{pages}</Span>
          </PricePages>
          <PricePages>
            Price : <Span>{price} /-</Span>{' '}
          </PricePages>
          <PricePages>
            Published on : <Span>{publishedDate}</Span>
          </PricePages>
          <AddToCartBtn type="button" onClick={addToCartFunc}>
            Add to Cart
          </AddToCartBtn>
        </BookDetailsDiv>
      </BookInfoContainer>
    )
  }

  render() {
    const {bookInfo, loading} = this.state

    return (
      <BookStoreContext.Consumer>
        {value => {
          const {addToCartList} = value

          const sendTrigger = () => {
            addToCartList(bookInfo)
          }

          return (
            <BookDetailsContainer>
              <Header />
              <BooksDetailsSection>
                {loading ? (
                  <LoaderContainer>
                    <ThreeDots color="blue" height={40} width={40} />
                  </LoaderContainer>
                ) : (
                  this.renderBookDetails(sendTrigger)
                )}
              </BooksDetailsSection>
            </BookDetailsContainer>
          )
        }}
      </BookStoreContext.Consumer>
    )
  }
}

export default BookDetails
