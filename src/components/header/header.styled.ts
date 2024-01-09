import styled from 'styled-components'
import { Button, Column, Row, Text400, Text600 } from '../../styled'

export const HeaderCentral = styled.div`
    position: relative;
    background: #060809;
`
export const HeaderWrapper = styled(Column)`
    background: #060809;
    height: 771px;
    overflow: hidden;
`
export const Navbar = styled.nav`
    display: flex;
    height: 90px;
    padding: 0px 40px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
`

export const HeaderLeft = styled(Row)`
    align-items: center;
    gap: 32px;
`
export const HeaderRight = styled(HeaderLeft)` 
    gap: 25px;
`
export const ImageLogo =styled.img`
    width: 163px;
    height: 64.187px;
    object-fit: contain;
`
export const TextWrapper = styled(Row)`
    align-items: center;
    gap: 20px;
`
export const TextLeft = styled(Text600)<{active?:string}>`
    height: 39px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-bottom:${({active})=> active === "active" ? "4px solid #25A75C" : "none"} ;
    cursor: pointer;
`
export const TextRight = styled(TextLeft)`
     border-bottom: none;
`

export const Divider = styled.span`
    display: inline-block;
    width: 2px;
    height: 27px;
    background: var(--white);
`

export const HeaderDesc = styled(Row)`
    //padding: 150px;
    justify-content: center;
    align-items: center;//padding-right: 100px;
    position: relative;
    //overflow: hidden;
`
export const CTAHeader = styled(HeaderDesc)`
    flex-direction: column;
    position: relative;
    /* overflow:hidden; */
`
export const DescWrapper = styled(Column)`
    padding-left: 90px;
    padding-top: 8rem;
    align-items: flex-start;
    gap: 32px;
`

export const DescWrapperII = styled(DescWrapper)`
    padding-top: 10rem; 
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const SecureText = styled(Text600)`
    width: 543px;
    font-size: 46px;
    line-height: 64px; 
    color: var(--white);
`
export const SecureTextII = styled(SecureText)`
    width: 690px;
    text-align: center;
`

export const SmallText = styled(Text400)`
    font-size: 18px;
    line-height: 160%;
    color: (--white);
`
export const SmallTextII = styled(SmallText)`
    width: 584px;
    text-align: center;
`

export const HeaderImage = styled.img`
    width: 690px;
    height: 650px;
    object-fit: cover;
    /* position: absolute;
    right: 0; */
`

export const HeaderImageII = styled(HeaderImage)`
    width: 900px;
    height: 550px;
    position: absolute;
    bottom: -25rem; 
    right: 10rem;
    border-radius: 8px;
`

export const SmallBtn = styled(Button)`
    width: 220px;
    padding: 16px 24px;
`

