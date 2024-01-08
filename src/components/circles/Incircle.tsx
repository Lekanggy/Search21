import styled from "styled-components"


export const CircleContainer = styled.div`
    position: absolute;
    right: -8rem;
    bottom: -24rem;
`
export const CircleContainerII = styled(CircleContainer)`
    /* bottom: 0; */
    right: 0rem;
    bottom: -30rem;
`
export const Wrapper = styled.div`
    width: 771.904px;
    height: 772.798px;
    transform: rotate(-128.933deg);
    flex-shrink: 0;
    border-radius: 600px;
    border: 1px solid #5CB23A;
    /* background: var(--white); */
    /* z-index: 10; */
`
export const WrapperII = styled.div`
    width: 600px;
    height: 558.366px;
    transform: rotate(80deg);
    flex-shrink: 0;
    border-radius: 558.366px;
    border: 1px solid #5CB23A;
`
export const InnerCircle = styled.div`
    /* position: absolute; */
    width: 687.031px;
    height: 687.031px;
    transform: rotate(-128.933deg);
    flex-shrink: 0;
    border-radius: 500px;
    background: rgba(37, 167, 92, 0.39);
    backdrop-filter: blur(34px);
    /* z-index: 0; */
`
export const InnerCircleII = styled.div`
    width: 490px;
    height: 490px;
    transform: rotate(60deg);
    flex-shrink: 0;
    border-radius: 50%;
    background: rgba(37, 167, 92, 0.39);
    backdrop-filter: blur(34px);
`

const InCircle = () => {
  return (
   
    <CircleContainer>
        <InnerCircle>
            <Wrapper/>
        </InnerCircle>
    </CircleContainer>
       
   
  )
}



export default InCircle