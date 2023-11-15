import styled from 'styled-components'

export const BookDetailsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
`
export const BooksDetailsSection = styled.div`
  height: 85%;
  width: 100%;
`

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const BookInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const CoverImgContainer = styled.div`
  width: 48%;
  height: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const CoverImage = styled.img`
  width: 90%;
  height: 95%;
  border-radius: 5px;
  background-size: cover;
`
export const BookDetailsDiv = styled.div`
  width: 48%;
  height: 85%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`
export const Span = styled.span`
  font-size: 28px;
  color: lightsalmon;
`

export const BookName = styled.h1`
  font-size: 30px;
  color: #000000;
  margin-bottom: 1%;
`
export const Authors = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`

export const RatingDiv = styled.div`
  height: 10%;
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PricePages = styled(Authors)`
  margin-bottom: 1%;
`
export const AddToCartBtn = styled.button`
  height: 10%;
  width: 30%;
  color: #ffffff;
  background-color: #000000;
  border-width: 0px;
  border-radius: 10px;
  margin-top: 4%;
  cursor: pointer;
  :hover {
    background-color: lightcoral;
    border-width: 2px;
    border-color: red;
  }
`
