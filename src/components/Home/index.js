import {Component} from 'react'
import {Link} from 'react-router-dom'
import {ThreeDots} from 'react-loader-spinner'
import Header from '../Header'
import './index.css'
import {
  HomeContainer,
  LoaderContainer,
  BooksSection,
  BooksUnorderedList,
  ListItem,
  CoverImage,
  BookTitle,
} from './styledComponents'

/*
  Books API might give too many requests message, only 100 API calls/Month per hour.Used same data cause limit reached.

  {
    "book_id": 62080187,
    "name": "Never Lie",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661428846l/62080187._SY475_.jpg",
    "url": "https://www.goodreads.com/book/show/62080187-never-lie"
  },
  {
    "book_id": 45299992,
    "name": "If You Tell: a True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556171767l/45299992._SY475_.jpg",
    "url": "https://www.goodreads.com/book/show/45299992-if-you-tell"
  },
  {
    "book_id": 57795665,
    "name": "The Locked Door",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618859577l/57795665._SY475_.jpg",
    "url": "https://www.goodreads.com/book/show/57795665-the-locked-door"
  },
  {
    "book_id": 61313902,
    "name": "Five Survive",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664370443l/61313902._SY475_.jpg",
    "url": "https://www.goodreads.com/book/show/61313902-five-survive"
  },
  {
    "book_id": 60177373,
    "name": "Fairy Tale",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg",
    "url": "https://www.goodreads.com/book/show/60177373-fairy-tale"
  },
  {
    "book_id": 58724923,
    "name": "Hidden Pictures",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635260162l/58724923.jpg",
    "url": "https://www.goodreads.com/book/show/58724923-hidden-pictures"
  },
  {
    "book_id": 58909880,
    "name": "The House Across the Lake",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639618949l/58909880.jpg",
    "url": "https://www.goodreads.com/book/show/58909880-the-house-across-the-lake"
  },
  {
    "book_id": 52476830,
    "name": "The Push",
    "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609854219l/52476830._SY475_.jpg",
    "url": "https://www.goodreads.com/book/show/52476830-the-push"
  },

  */

class Home extends Component {
  state = {
    booksList: [
      {
        book_id: 62080187,
        name: 'Never Lie',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661428846l/62080187._SY475_.jpg',
        url: 'https://www.goodreads.com/book/show/62080187-never-lie',
      },
      {
        book_id: 45299992,
        name: 'If You Tell: a True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556171767l/45299992._SY475_.jpg',
        url: 'https://www.goodreads.com/book/show/45299992-if-you-tell',
      },
      {
        book_id: 57795665,
        name: 'The Locked Door',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618859577l/57795665._SY475_.jpg',
        url: 'https://www.goodreads.com/book/show/57795665-the-locked-door',
      },
      {
        book_id: 61313902,
        name: 'Five Survive',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664370443l/61313902._SY475_.jpg',
        url: 'https://www.goodreads.com/book/show/61313902-five-survive',
      },
      {
        book_id: 60177373,
        name: 'Fairy Tale',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg',
        url: 'https://www.goodreads.com/book/show/60177373-fairy-tale',
      },
      {
        book_id: 58724923,
        name: 'Hidden Pictures',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635260162l/58724923.jpg',
        url: 'https://www.goodreads.com/book/show/58724923-hidden-pictures',
      },
      {
        book_id: 58909880,
        name: 'The House Across the Lake',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639618949l/58909880.jpg',
        url: 'https://www.goodreads.com/book/show/58909880-the-house-across-the-lake',
      },
      {
        book_id: 52476830,
        name: 'The Push',
        cover:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609854219l/52476830._SY475_.jpg',
        url: 'https://www.goodreads.com/book/show/52476830-the-push',
      },
    ],
    loading: false,
  }

  /*
  commented because data fetched manually and API requests limit reached.

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    this.setState(pre => ({loading: !pre.loading}))

    const url = 'https://hapi-books.p.rapidapi.com/week/art/16'

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

      const camelCasedData = data.map(eachBook => ({
        bookId: eachBook.book_id,
        cover: eachBook.cover,
        name: eachBook.name,
        imageUrl: eachBook.url,
      }))

      this.setState(pre => ({
        booksList: camelCasedData,
        loading: !pre.loading,
      }))
    } catch (error) {
      console.error(error)
    }
  }
  */

  renderBooksList = () => {
    const {booksList} = this.state

    return booksList.map(each => (
      <Link
        to={`/book/${each.book_id}`}
        className="link-css"
        key={each.book_id}>
        <ListItem>
          <CoverImage src={each.cover} alt="book cover image" />
          <BookTitle>{each.name}</BookTitle>
        </ListItem>
      </Link>
    ))
  }

  render() {
    const {loading} = this.state

    return (
      <HomeContainer>
        <Header />
        <BooksSection>
          {loading ? (
            <LoaderContainer>
              <ThreeDots color="blue" height={50} width={50} />
            </LoaderContainer>
          ) : (
            <BooksUnorderedList>{this.renderBooksList()}</BooksUnorderedList>
          )}
        </BooksSection>
      </HomeContainer>
    )
  }
}

export default Home
