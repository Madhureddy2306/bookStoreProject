import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export const BooksSection = styled.div`
  height: 85%;
  width: 100%;
  padding-top: 1%;
`
export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const BooksUnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  height: 100%;
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: auto;
`
export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 1%;
  background-color: lightgrey;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: lightcoral;
  }
`
export const CoverImage = styled.img`
  width: 90%;
  height: 70%;
  background-position: center;
  border-radius: 3px;
`
export const BookTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  width: 90%;
  text-align: center;
  margin: 0px;
`
