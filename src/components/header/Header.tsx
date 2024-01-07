import { Button } from '../../styled'
import { 
  DescWrapper,
  Divider, 
  HeaderDesc, 
  HeaderImage, 
  HeaderLeft, 
  HeaderRight, 
  HeaderWrapper, 
  ImageLogo, 
  Navbar, 
  SecureText, 
  SmallBtn, 
  SmallText, 
  TextLeft, 
  TextRight, 
  TextWrapper 
} from './header.styled'

import Logo from '../../assets/logo.png'
import People from '../../assets/myrtrim.png'


const Header = () => {
  return (
    <HeaderWrapper>
       <Navbar>
        <HeaderLeft>
          <ImageLogo src={Logo} alt='logo'/>
          <TextWrapper>
            <TextLeft>For Individual</TextLeft>
            <TextLeft>For Business</TextLeft>
          </TextWrapper>
        </HeaderLeft>

        <HeaderRight>
          <TextRight>About</TextRight>
          <TextRight>Contact</TextRight>
          <Divider/>
          <TextRight>Login</TextRight>
          <Button>Create free account</Button>
        </HeaderRight>
       </Navbar>
       <HeaderDesc>
        <DescWrapper>
          <SecureText>Secure & seamless online transactions</SecureText>
          <SmallText>Providing you with the best online payment experience</SmallText>
          <SmallBtn>Create free account</SmallBtn>
        </DescWrapper>
        <HeaderImage src={People} alt='people image'/>
       </HeaderDesc>
    </HeaderWrapper>
   
  )
}

export default Header