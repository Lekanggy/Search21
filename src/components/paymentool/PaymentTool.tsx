import Fast from "../icons/Fast"
import Secure from "../icons/Secure"
import UserMsg from "../icons/UserMsg"
import { CardDesc, CardTitle, CardWrapper, PaymentCard, PaymentWrapper, SmallTitle, Title, TitleWrapper } from "./payment.styled"

const dataItem = [
    {
        id: 1,
        title: "Secure",
        desc: "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form."
    },
    {
        id: 1,
        title: "Secure",
        desc: "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form."
    },
    {
        id: 1,
        title: "Secure",
        desc: "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form."
    }
]

const PaymentTool = () => {
  return (
    <PaymentWrapper>
        <TitleWrapper>
            <Title>Payments tools designed for you</Title>
            <SmallTitle>
                Explore payment features that 
                provides you with every possible solution
            </SmallTitle>
        </TitleWrapper>
        <CardWrapper>
            <PaymentCard>
                <UserMsg/>
                <CardTitle>User Friendly</CardTitle>
                <CardDesc>Highly responsive and easy to navigate</CardDesc>
            </PaymentCard>
            <PaymentCard>
                <Secure/>
                <CardTitle>Secure</CardTitle>
                <CardDesc>
                    Your data is secure. It is 
                    continuously monitored, audited, and stored in an encrypted form.
                </CardDesc>
            </PaymentCard>
            <PaymentCard>
                <Fast/>
                <CardTitle>Fast</CardTitle>
                <CardDesc>Transacting takes only a few seconds - it's convenient and safe.</CardDesc>
            </PaymentCard>
        </CardWrapper>
    </PaymentWrapper>
  )
}

export default PaymentTool