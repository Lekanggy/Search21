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
  FundWrapper,
  WalletImage,
  RightItemII
} from './bill.styled'

import BillTag from '../../assets/bildetails.png'
import Wallet from '../../assets/updateImag.png'
import InCircle from '../circles/Incircle'
import Phone from '../phone/Phone'
import { Title } from '../paymentool/payment.styled'
import AppleStore from '../icons/AppleStore'
import GoogleStore from '../icons/GoogleStore'
import PhoneImage from '../../assets/busIIImage.png'
import { billData, billDataII } from './data'
import { CatProp } from '../../screens/HomePage'
import { useState, useEffect } from 'react'



const BillSection = ({cat}:CatProp) => {

    //const [active, setActive] = useState("active")
    const act = cat === "single" ? "Pay bills" : "Reports"
    const [current, setCurrent] = useState(act)
    const [imgItem, setImgItem] = useState("Pay bills")

    const handleCurrentItem = (k:string)=>{
      setCurrent(k)
      setImgItem(k)
      //setActive("active")
    }

  const data = cat === "single" ? billData : billDataII

  useEffect(()=>{
    if(cat === "buz"){
      setCurrent("Reports")
    }else{
      setCurrent("Pay bills")
    }
    
  },[cat])
  return (
    <BillWrapper>
      <BillMain>
        <BillSectionTop>
          <InCircle/>
          <LeftBill>
            {
              data.map(d=> 
                  <TextWrapper 
                    key={d.id} 
                    active={current === d.title ? "active" : ""}
                    onClick={()=>handleCurrentItem(d.title)}
                  >
                    <BTitle>{d.title}</BTitle>
                    <BSmall>{d.desc}</BSmall>
                  </TextWrapper>
                )
            }
          </LeftBill>
          {
            cat === "single" ? (
              <RightItem bg={imgItem}>
                {
                  (imgItem === "Pay bills" 
                  || imgItem === "Buy Airtime & Data" 
                  ||imgItem === "Money Transfer"
                  ) &&  <RightImage src={BillTag} alt='taxi image'/>
                }
                {
                  imgItem === "Pay Toll fee" &&  <WalletImage src={Wallet} alt= "wallet image"/>
                }
                 
              </RightItem>
            ):(
              <RightItemII>
                <WalletImage src={Wallet} alt= "wallet image"/>
              </RightItemII>
            )
          }

        </BillSectionTop>
           {
            cat === "single" && (
              <BillSectionBottom>
                <BottomLeft>
                  <Phone/>
                </BottomLeft>
                <BottomRight>
                  <BottomRightItem>
                    <TextWrapper style={{border: 'none', padding: 0}}>
                      <Title>Transact on the go</Title>
                      <BSmall>Stay on top of your business with our easy-<br/>to-use app</BSmall>
                    </TextWrapper>
                    <Btn>Get Started</Btn>
                    <PhoneStore>
                      <AppleStore/>
                      <GoogleStore/>
                    </PhoneStore>
                  </BottomRightItem>
                </BottomRight>
              </BillSectionBottom>
            )
           }
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