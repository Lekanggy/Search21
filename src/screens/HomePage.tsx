
import { SetStateAction, useState } from 'react'
import BillSection from '../components/billsection/BillSection'
import FooterItem from '../components/footer/FooterItem'
//import InCircle from '../components/circles/Incircle'
import Header from '../components/header/Header'
import PaymentTool from '../components/paymentool/PaymentTool'

export type CatProp = {
  cat: string
  setItem: React.Dispatch<SetStateAction<string>>
}

const HomePage = () => {

  const [category, setCategory] = useState("single")
  return (
   <> 
    <Header cat={category} setItem={setCategory}/>
    <PaymentTool cat={category} setItem={setCategory}/>
    <BillSection cat={category} setItem={setCategory}/>
    <FooterItem/>
  </>
  )
}

export default HomePage