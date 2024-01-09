import styled from "styled-components";
import { Button, Column, Row, Text600 } from "../../styled";
import { SmallTitle, Title } from "../paymentool/payment.styled";

export const BillWrapper = styled.div`
    margin-top: 5rem;
`
export const BillMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 150px;
`

export const BillSectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:90px;
    padding-left: 40px;
    position: relative;
`
export const BillSectionBottom = styled(BillSectionTop)`
    
`
export const LeftBill = styled(Column)`
    margin-top: 6rem;
    gap: 40px;
    border-left: 6px solid #DBE2EA;
`
export const TextWrapper = styled(Column)<{active?: string}>`
    padding-left: 32px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border-left: ${({active})=> active === "active" ? "6px solid #25A75C" : "6px solid #DBE2EA" };
    margin-left: -6px;
    cursor: pointer;
`
 export const BTitle = styled(Title)`
    font-size: 28px;
 `
export const BSmall = styled(SmallTitle)`
    padding-right: 5rem;
`    

export const RightItem = styled.div<{bg?:string}>`
    display: grid;
    place-content: center;
    width: 650px;
    height: 771px;
    border-radius: 8px;
    background:#F1F1F1;
    position: relative;
    overflow:hidden;
`
export const RightItemII = styled.div`
    display: grid;
    place-content: center;
    width: 650px;
    height: 771px;
    border-radius: 8px;
    background: #F1F1F1;
   z-index: 10;
   padding: 30px 40px;
`
export const RightImage = styled.img`
    position: absolute;
    width: 549px;
    height: 621px;
    flex-shrink: 0;
    border-radius: 24px 0px 0px 0px;
    right: -2.5rem;
    bottom: -2.3rem;
`

export const WalletImage = styled(RightImage)`
    position: relative;
    width: 482px;
    height: 630px;
    right: 0;
    bottom: 0;
    object-fit: cover;
`

export const BottomLeft = styled(RightItem)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BottomRight = styled(Row)`

`
export const BottomRightItem = styled(Column)`
    align-items: flex-start;
    gap: 32px;
`
export const Btn = styled(Button)`
    width: 190px;
`

export const PhoneStore = styled(Row)`
    align-items:center;
    gap: 24px;
`

export const FundDesc = styled(BillSectionTop)`
  
`

export const FundWrapper = styled(Row)`
   background: var(--btn-col);
   border-radius: 8px;
   box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.08);
   height: 522px;
   justify-content: space-between;

    img{
        width: 1050px;
        height: 100%;
        object-fit: cover;
    }
`

export const FundLeft = styled(Column)`
    padding-left: 52px;
    padding-top: 5rem;
    align-items: flex-start;
    gap: 24px;
`
export const FundTexItem = styled(TextWrapper)`
    border: none;
    padding: 0;
    width: 250px;
`

export const SendText = styled(Text600)`
    color: #FFF;
    font-size: 36px;
    font-weight: 600;
    line-height: 150%; /* 54px */
    color: #FFF;
`

export const SendTextII = styled(SendText)`
    color: rgba(255, 255, 255, 0.90);
    font-weight: 400;
`

export const BtnII = styled(Btn)`
    background: #fff;
    color: #25A75C;
    width: 200px;
`

