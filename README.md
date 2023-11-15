# Interactive Bookstore Application

## Objective

- Building a ReactJS application with multiple pages/components, including Home,
  Book Listing, Book Details, Shopping Cart, and Checkout pages.
- Implementing features such as book search, book filtering, add to cart, remove
  from cart, and order placement.

## Tech Stacks Used

- ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git,
  and GitHub for hosting the repository.

## Must Haves

- Create a new public repository on GitHub for the assignment.
- Commit your code regularly and include clear commit messages.
- Include a README file explaining the project setup, usage instructions, and
  any additional information.
- Ensure the repository is well-organized and easy to navigate.

## Design Files

- Home Route
  - Book List
- Book Details
- Cart
- Checkout Page

# Pages Navigation

## Page : Home

    Home page displays the main page of our book store application and contains Header and features like website logo, Cart logo, Books list, logout button etc.

## Page : Book Details

    Book details page contains Header, title, price, rating and  functionality buttons to add or remove from cart etc.

## Page : Cart

    Cart page displays Header, added books count, total price, proceed to checkout button etc.

## Page : Checkout

    Checkout Page contains Header, added books count, total price, payment button.

## APIS

### Book List API

    URL  : https://hapi-books.p.rapidapi.com/week/art/15
    Method : GET
    Example Response  :
                    {
                    book_id:62080187
                    name:"Never Lie"
                    cover:"https://i.gr-assets.com/.../books/1661428846l/62080187._SY475_.jpg"
                    url:"https://www.goodreads.com/book/show/62080187-never-lie"
                    }

### Book Details API

    URL  : https://hapi-books.p.rapidapi.com/book/:bookId
    Method : GET
    Example Response  :
                    {
                    "book_id": 56597885,
                    "name": "Beautiful World, Where Are You",
                    "cover": "https://i.gr-assets.com/.../books/1618329605l/56597885.jpg",
                    "url": "https://www.goodreads.com/book/show/56597885",
                    "authors": ["Sally Rooney"],
                    "rating": 3,
                    "pages": 356,
                    "published_date": "September 7th 2021",
                    "synopsis": "Beautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of..."
                    }

## Third-Party Packages

- React Loader - Three Dots used to display loader while fetching results.
