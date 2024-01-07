import styled from "styled-components";
import { Column, Row, Text400, Text500, Text600 } from "../../styled";

export const PaymentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    margin-top: 3rem;
    padding: 0 91px;
`

export const TitleWrapper = styled(Column)`
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`

export const Title = styled(Text600)`
    color: #4F4F4F;
    font-size: 36px;
    color: #4F4F4F;
    line-height: 44px;
`
export const SmallTitle = styled(Text400)`
    color: #4F4F4F;
    font-size: 18px;
    line-height: 160%;
`
export const CardWrapper = styled(Row)`
    justify-content: center;
    align-items: center;
    gap: 24px;

`
export const PaymentCard = styled(Column)`
    align-items: flex-start;
    gap: 20px;
    padding: 30px 40px;
    background: var(--white);
    height: 388px;
    width: 380px; 
    border-radius: 8px;
    border: 1px solid rgba(92, 178, 58, 0.27);
    
`
export const CardTitle = styled(Text500)`
    color: rgba(15, 9, 25, 0.80);
    font-size: 22px;
`
export const CardDesc = styled(Text400)`
    color: #555;
    font-size: 18px;
    font-weight: 400;
    line-height: 29px; /* 161.111% */
    letter-spacing: 0.36px;
`