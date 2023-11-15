import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  height: 15%;
  width: 100%;
  background-size: cover;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.div`
  width: 30%;
  height: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2%;
`

export const WebsiteLogo = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  cursor: pointer;
`
export const CartCount = styled.p`
  font-size: 15px;
  width: 15%;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  background-color: #000000;
  border-radius: 10px;
`

export const BookStoreHeading = styled.h1`
  font-size: 44px;
  font-family: 'sans-serif';
  color: lightcoral;
  text-align: center;
`

export const CartLogOutBtnDiv = styled.div`
  width: 30%;
  height: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0px;
`
export const LogOutBtn = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  height: 60%;
  width: 45%;
  border-radius: 28px;
  border-width: 0px;
  cursor: pointer;
  :hover {
    background-color: lightcoral;
  }
`
