import styled from 'styled-components'

export const CartMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const CartDetailsDiv = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
`
export const CartItemList = styled.ul`
  height: 70%;
  width: 100%;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  overflow-y: auto;
  margin-bottom: 0px;
`
export const CartHeading = styled.h1`
  font-size: 28px;
  color: #000000;
  align-self: flex-start;
  margin-left: 1%;
  margin-bottom: 0px;
`
export const Span = styled.span`
  color: navy;
  font-size: 30px;
`

export const HrLine = styled.hr`
  background-color: #000000;
  height: 2px;
  width: 98%;
`

export const CartItem = styled.li`
  width: 98%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  border-style: solid;
  border-width: 2px;
  border-color: darkcyan;
  margin-bottom: 1%;
  margin: auto;
`
export const CoverImg = styled.img`
  width: 20%;
  height: 95%;
  background-size: cover;
  border-radius: 5px;
`
export const DetailsDiv = styled.div`
  width: 78%;
  height: 95%;
  padding: 1%;
  border-left: 3px solid navy;
`

export const NamePriceDiv = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Name = styled.h2`
  font-size: 22px;
  color: #000000;
`
export const Span2 = styled.span`
  color: navy;
`
export const NoItems = styled(CartHeading)`
  align-self: center;
`

export const ShopButton = styled.button`
  background-color: #000000;
  height: 10%;
  width: 20%;
  color: #ffffff;
  border-radius: 20px;
  border-width: 0px;
  cursor: pointer;
  :hover {
    background-color: lightcoral;
  }
`
export const RemoveBtn = styled(ShopButton)`
  height: 25%;
  width: 15%;
  border-radius: 5px;
  margin-left: auto;
`

export const TotalPrice = styled.h1`
  font-size: 28px;
  color: navy;
  align-self: flex-end;
  margin-right: 2%;
  margin-bottom: 0px;
`
export const CheckOutBtn = styled(ShopButton)`
  height: 8%;
  width: 18%;
  border-radius: 5px;
  margin-right: 2%;
  align-self: flex-end;
`
