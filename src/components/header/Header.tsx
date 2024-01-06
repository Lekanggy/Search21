import { Button } from '../../styled'
import { 
  Divider, 
  HeaderLeft, 
  HeaderRight, 
  HeaderWrapper, 
  ImageLogo, 
  Navbar, 
  TextLeft, 
  TextRight, 
  TextWrapper 
} from './header.styled'

import Logo from '../../assets/logo.png'


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
    </HeaderWrapper>
   
  )
}

export default Header