
import BillSection from '../components/billsection/BillSection'
import FooterItem from '../components/footer/FooterItem'
//import InCircle from '../components/circles/Incircle'
import Header from '../components/header/Header'
import PaymentTool from '../components/paymentool/PaymentTool'


const HomePage = () => {
  return (
   <> 
    <Header/>
    <PaymentTool/>
    <BillSection/>
    <FooterItem/>
  </>
  )
}

export default HomePage