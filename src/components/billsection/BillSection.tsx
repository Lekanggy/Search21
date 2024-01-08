import { 
  BillMain, 
  BillWrapper, 
  BillSectionTop, 
  BillSectionBottom, 
  LeftBill, 
  TextWrapper, 
  BTitle, 
  BSmall, 
  RightItem, 
  RightImage, 
  BottomLeft,
  BottomRight,
  BottomRightItem,
  Btn,
  PhoneStore,
  FundDesc,
  FundLeft,
  FundTexItem,
  SendText,
  SendTextII,
  BtnII,
  FundWrapper
} from './bill.styled'

import BillTag from '../../assets/bildetails.png'
import InCircle from '../circles/Incircle'
import Phone from '../phone/Phone'
import { SmallTitle, Title } from '../paymentool/payment.styled'
import AppleStore from '../icons/AppleStore'
import GoogleStore from '../icons/GoogleStore'
import PhoneImage from '../../assets/busIIImage.png'



const BillSection = () => {
  return (
    <BillWrapper>
      <BillMain>
        <BillSectionTop>
          <InCircle/>
          <LeftBill>
            <TextWrapper>
              <BTitle>Pay bills</BTitle>
              <BSmall>Paying your bills has never been so easy.</BSmall>
            </TextWrapper>
            <TextWrapper>
              <BTitle>Buy Airtime & Data</BTitle>
              <BSmall>Never get caught with low airtime and data again!</BSmall>
            </TextWrapper>
            <TextWrapper>
              <BTitle>Money Transfer</BTitle>
              <BSmall>Transferring money is now hassle-free.</BSmall>
            </TextWrapper>
            <TextWrapper>
              <BTitle>Pay Toll Fee</BTitle>
              <BSmall>Never worry about getting a toll ticket again.</BSmall>
            </TextWrapper>
          </LeftBill>
          <RightItem>
            <RightImage src={BillTag} alt='taxi image'/>
          </RightItem>
        </BillSectionTop>
           

        <BillSectionBottom>
            <BottomLeft>
              <Phone/>
            </BottomLeft>
            <BottomRight>
              <BottomRightItem>
                <TextWrapper style={{border: 'none', padding: 0}}>
                  <Title>Transact on the go</Title>
                  <SmallTitle>Stay on top of your business with our easy-to-use app</SmallTitle>
                </TextWrapper>
                <Btn>Get Started</Btn>
                <PhoneStore>
                  <AppleStore/>
                  <GoogleStore/>
                </PhoneStore>
              </BottomRightItem>
            </BottomRight>
        </BillSectionBottom>

        <FundDesc>
          <FundWrapper>
            <FundLeft>
              <FundTexItem>
                <SendText>Send funds</SendText>
                <SendTextII>Remit taxes</SendTextII>
                <SendTextII>Buy utilities</SendTextII>
              </FundTexItem>
              <BtnII>Get Started</BtnII>
            </FundLeft>
            <img src={PhoneImage} alt='bus image'/>
          </FundWrapper>
        </FundDesc>
      </BillMain>
    </BillWrapper>
  )
}

export default BillSection