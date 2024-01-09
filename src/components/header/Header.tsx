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
import { CatProp } from '../../screens/HomePage'


const Header = ({cat, setItem}:CatProp) => {
  return (
    <HeaderCentral>
        <HeaderWrapper>
        <Navbar>
          <HeaderLeft>
            <ImageLogo src={Logo} alt='logo'/>
            <TextWrapper>
              <TextLeft 
                onClick={()=> setItem("single")}
                active={cat === "single" ? "active" : ""}
              >
                For Individual
              </TextLeft>
              <TextLeft 
                onClick={()=> setItem("buz")}
                active={cat === "buz" ? "active" : ""}
              >
                For Business
              </TextLeft>
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
        {
          cat === "single" ? (
            <HeaderDesc>
              <DescWrapper
                 initial={{opacity:0, translateX: 200, translateY: -100}}
                 animate={{opacity: 1, translateX: -10, translateY: 0}}
                 transition={{duration: 0.3, delay:0., ease:"easeInOut"}}
              >
                <SecureText>Secure & seamless online transactions</SecureText>
                <SmallText>Providing you with the best online payment experience</SmallText>
                <SmallBtn>Create free account</SmallBtn>
              </DescWrapper>
              <HeaderImage src={People} alt='people image'/>
            </HeaderDesc>
          ):(
            <CTAHeader
              initial={{opacity:0, translateX: -50, translateY: 20}}
              animate={{opacity: 1, translateX: 20, translateY: -20}}
              transition={{duration: 0.3,delay:0, ease:"easeInOut"}}
            >
              <DescWrapperII>
                <SecureTextII>Manage payroll, compliance & HR in real time</SecureTextII>
                <SmallTextII>
                  Make income tax remittances to the state internal
                  revenue service for your employees.
                </SmallTextII>
                <SmallBtn
                  initial={{ translateX: -200}}
                  animate={{ translateX: 0}}
                  transition={{duration: 0.3,delay:0.1, ease:"easeInOut"}}
                >
                  Create free account
                </SmallBtn>
              </DescWrapperII>
              <InCircleII/>
            </CTAHeader>
          )
        }
      
      </HeaderWrapper>
      {
        cat === "buz" &&  <HeaderImageII src={CPeople} alt='people image'/>
      }
    </HeaderCentral>
   
  )
}

export default Header