import styled from "styled-components";
import { Column, Row, Text400, Text600 } from "../../styled";

export const FooterWrapper = styled.footer`
    margin-top: 150px;
    padding-right:90px;
    padding-left: 40px;
    padding-bottom: 40px;

    img{
        width: 163px;
        height: 64.187px;
        object-fit: cover;
        margin-bottom: 1rem;
    }
`
export const FooterContainer = styled(Row)`
    justify-content: space-between;
    align-items: center;
`

export const FooterLeft = styled(Column)`
    align-items: flex-start;
    gap: 20px;
`
export const FooterSocialIcon = styled(Row)`
    align-items: flex-start;
    gap: 20px;
    padding-left: 0.3rem;
`
export const CopyRightText = styled(Text400)`
    font-size: 1rem;
    line-height: 24px;
    color: #979797;
    padding-left: 0.4rem;
`

export const FooterRight = styled(Row)`
    gap: 60px;
`
export const FooterAbout = styled(Column)`
    align-items: flex-start;
    gap: 20px;
`
export const DescText = styled(CopyRightText)`
    font-weight: 500;
    padding-left: 0;
`
export const DescTextTitle = styled(Text600)`
    color: #000E0C;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px; 
`
export const FooterProduct = styled(FooterAbout)``