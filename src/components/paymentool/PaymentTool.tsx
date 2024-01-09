import { CatProp } from "../../screens/HomePage"
import { currencyData, dataItem, smaTitle, smaTitleII } from "./data"
import { CardDesc, CardTitle, CardWrapper, PaymentCard, PaymentWrapper, SmallTitle, Title, TitleWrapper } from "./payment.styled"




const PaymentTool = ({cat}:CatProp) => {

    const data = cat === "single" ? dataItem : currencyData
  return (
    <PaymentWrapper cat={cat}>
        <TitleWrapper>
            <Title>Payments tools designed for you</Title>
            <SmallTitle>
                {
                    cat === "single" ? smaTitle : smaTitleII
                }
            </SmallTitle>
        </TitleWrapper>
        <CardWrapper>
            {
                data?.map(({id, desc, title, ICN})=>
                        <PaymentCard key={id}>
                            <ICN/>
                            <CardTitle>{title}</CardTitle>
                            <CardDesc>{desc}</CardDesc>
                        </PaymentCard>
                    )
            }
        </CardWrapper>
    </PaymentWrapper>
  )
}

export default PaymentTool