import styled from "styled-components"
import { Column } from "../../styled"
import PhoneImg from '../../assets/phone.png'


const PhoneWrapper = styled.div`
    
    position: sticky;
    bottom: 0;
`
const PhoneContainer = styled(Column)`
    width: 407px;
    height: 720px;
    border-radius: 44.426px;
    background: var(--Sorta-Sage);
    align-items: center;
    justify-content: center;
    

    img{
        width: 367.703px;
        height: 680px;
        border-radius: 27.279px;
        background: var(--Screen);
        object-fit: cover;
    }
`
const Glass = styled(Column)`
    justify-content: center;
    align-items: center;
    width: 392.03px;
    height: 700px;
    flex-shrink: 0;
    border-radius: 37.411px;
    background: var(--Glass);
`    
const Phone = () => {
  return (
    <PhoneWrapper>
     
        <PhoneContainer>
            <Glass>
                    <img src={PhoneImg} alt="phone image"/>
            </Glass>
        </PhoneContainer>
    </PhoneWrapper>
    
  )
}

export default Phone