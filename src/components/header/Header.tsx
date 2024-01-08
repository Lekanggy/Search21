import { Button } from '../../styled'
import { 
  CTAHeader,
  DescWrapper,
  DescWrapperII,
  Divider, 
  HeaderCentral, 
  HeaderDesc, 
  HeaderImage, 
  HeaderImageII, 
  HeaderLeft, 
  HeaderRight, 
  HeaderWrapper, 
  ImageLogo, 
  Navbar, 
  SecureText, 
  SecureTextII, 
  SmallBtn, 
  SmallText, 
  SmallTextII, 
  TextLeft, 
  TextRight, 
  TextWrapper 
} from './header.styled'

import Logo from '../../assets/logo.png'
import People from '../../assets/myrtrim.png'
import CPeople from '../../assets/busimage.png'
import InCircleII from '../circles/InCircleII'


const Header = () => {
  return (
    <HeaderCentral>
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
        {/* <HeaderDesc>
          <DescWrapper>
            <SecureText>Secure & seamless online transactions</SecureText>
            <SmallText>Providing you with the best online payment experience</SmallText>
            <SmallBtn>Create free account</SmallBtn>
          </DescWrapper>
          <HeaderImage src={People} alt='people image'/>
        </HeaderDesc> */}
        <CTAHeader>
            <DescWrapperII>
              <SecureTextII>Manage payroll, compliance & HR in real time</SecureTextII>
              <SmallTextII>
                Make income tax remittances to the state internal
                revenue service for your employees.
              </SmallTextII>
              <SmallBtn>Create free account</SmallBtn>
            </DescWrapperII>
            <InCircleII/>
        </CTAHeader>
      </HeaderWrapper>
      <HeaderImageII src={CPeople} alt='people image'/>
    </HeaderCentral>
   
  )
}

export default Header