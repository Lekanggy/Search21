import styled from 'styled-components'
import { Button, Column, Row, Text400, Text600 } from '../../styled'


export const HeaderWrapper = styled(Column)`
    background: #060809;
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
export const TextLeft = styled(Text600)`
    height: 39px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid #25A75C;
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
`
export const DescWrapper = styled(Column)`
    padding-left: 90px;
    padding-top: 8rem;
    align-items: flex-start;
    gap: 32px;
`
export const SecureText = styled(Text600)`
    width: 543px;
    font-size: 46px;
    line-height: 64px; 
    color: var(--white);
`

export const SmallText = styled(Text400)`
    font-size: 18px;
    line-height: 160%;
    color: (--white);
`

export const HeaderImage = styled.img`
    width: 650px;
    height: 600px;
    object-fit: cover;
    /* position: absolute;
    right: 0; */
`

export const SmallBtn = styled(Button)`
    width: 220px;
    padding: 16px 24px;
`

