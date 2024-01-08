import React from 'react'
import { CopyRightText, DescText, DescTextTitle, FooterAbout, FooterContainer, FooterLeft, FooterProduct, FooterRight, FooterSocialIcon, FooterWrapper } from './footer.styled'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import XIcon from '../icons/XIcon'
import Logo from '../../assets/logo2.png'

const FooterItem = () => {
  return (
    <FooterWrapper>
        <FooterContainer>
            <FooterLeft>
                <img src={Logo} alt='logo item'/>
                <FooterSocialIcon>
                    <Instagram/>
                    <Facebook/>
                    <XIcon/>
                </FooterSocialIcon>
                <CopyRightText>
                    2015-2022 Taxaide Technologies Limited. All rights reserved
                </CopyRightText>
            </FooterLeft>
            <FooterRight>
                <FooterAbout>
                    <DescTextTitle>About</DescTextTitle>
                    <DescText>About</DescText>
                    <DescText>Legal & privacy</DescText>
                </FooterAbout>
                <FooterProduct>
                    <DescTextTitle>Product</DescTextTitle>
                    <DescText>TBook®</DescText>
                    <DescText>TaxiTWithhold®</DescText>
                    <DescText>TaxiTPayroll®</DescText>
                </FooterProduct>
            </FooterRight>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default FooterItem