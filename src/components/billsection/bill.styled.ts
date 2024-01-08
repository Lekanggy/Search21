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
export const TextWrapper = styled(Column)`
    padding-left: 32px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border-left: 6px solid #25A75C;
    margin-left: -6px;
`
 export const BTitle = styled(Title)`
    font-size: 28px;
 `
export const BSmall = styled(SmallTitle)``    

export const RightItem = styled.div`
    width: 600px;
    height: 771px;
    border-radius: 8px;
    background: #F1F1F1;
    position: relative;
`
export const RightImage = styled.img`
    position: absolute;
    width: 575px;
    height: 617px;
    flex-shrink: 0;
    border-radius: 24px 0px 0px 0px;
    //box-shadow: 0px 3px 24px 13px rgba(66, 69, 67, 0.07);
    right: -2rem;
    bottom: -2.3rem;
`

export const BottomLeft = styled(RightItem)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const BottomRight = styled(Row)``
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
   height: 400px;
   justify-content: space-between;

    img{
       width: 850px;
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