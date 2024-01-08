import styled from "styled-components"


const CircleContainer = styled.div`
    position: absolute;
    right: -8rem;
    bottom: -24rem;
`
const Wrapper = styled.div`
   
    width: 771.904px;
    height: 772.798px;
    transform: rotate(-128.933deg);
    flex-shrink: 0;
    border-radius: 600px;
    border: 1px solid #5CB23A;
    /* background: var(--white); */
    /* z-index: 10; */
`
const InnerCircle = styled.div`
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