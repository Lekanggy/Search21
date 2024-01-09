
import styled, {createGlobalStyle} from 'styled-components'
import {motion} from 'framer-motion'

type HeadingProps = {
    margin?: string,
    mb?: string,
    mt?: string,
    inverse?: string,
    width?: string
}

type FlexProps = {
    justify?: string,
    align?: string,
    padding?: string,
    gap?:string,
    margin?: string,
    position?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    minHeight?: string,
    maxHeight?:string,
    wrap?: string
}



// console.log(window.outerHeight)

const GlobalStyle = createGlobalStyle`
  body{
	
	&::-webkit-scrollbar{
		border-radius: 20px;
		background: rgba(163, 163, 173, 0.20);
		width: 5px;
		height: 10px;
    }
   
    &::-webkit-scrollbar-thumb {
        background:#088F71;
        border-radius: 20px;
    }
	
  }

 
	
  *{
    box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	//text-align: center;
	//height: 80vh;
    color: #FFF;

   
    --label-color: #088F71;
    --white: #fff;
    --Sorta-Sage: #94ABA4;
    --Glass: #080808;
    --Screen:#121212;
	--btn-col: linear-gradient(151deg, rgba(92, 178, 58, 0.80) 0%, rgba(4, 128, 2, 0.80) 100%);
    --bg-col: linear-gradient(151deg, rgba(92, 178, 58) 0%, rgb(4, 128, 2) 100%);
  }

 
  /* .Toastify__toast-body {
    background-color: red;
}
.Toastify__toast-theme--dark {
    color: blue;
} */

`;

export const Container = styled(motion.div)`
	width: 100%;
    overflow: hidden;
	//max-width: 1300px;
	

	/* @media screen and (max-width: 960px) {
		padding:30px 0;
	} */
`;

export const Heading = styled.h2<HeadingProps>`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const Row = styled(motion.div)<FlexProps>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled(motion.div)<FlexProps>`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

type Color = {
color?: string
}

export const Text500 = styled.span<Color>`
    display: inline-flex;
	color: ${({ color }) => (color ? color : '')};
    font-feature-settings: 'salt' on, 'liga' off;
    font-family: 'Poppins';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
`
export const Text400 = styled(Text500)`
    font-size: 14px;
	font-weight: 400;
`
export const Text600 = styled(Text500)`
	font-weight: 600;
`
export const Text700 = styled(Text500)`
	font-weight: 700;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
`
export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 250px;
    border: none;
   

   

    
`
export const ButtonItem = styled(FormItem)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 1.5rem;
    @media screen  and (min-width: 760px){
        
       gap: 20px;
    }
 
    
`
export const Button = styled(motion.button)`
    display: flex;
    /* width: 100%; */
    padding: 13px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 10px;
    background: var(--btn-col);
    color: #FFF;
    cursor: pointer;

    /* Font/Button */
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px; /* 19.2px */

   
`
export const FormLabel = styled.label`
    display:inline-block;
    color: #088F71;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;

/* Font/Paragraph 1 */
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 21px */
   
`
export const FormTitle = styled.h3`
    color: #FFF;
    font-family: "Inter";
    font-size:1.5rem;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    //line-height: 120%; /* 43.2px */
    @media screen  and (min-width: 768px){
        font-size:clamp(1rem, 100vw, 2rem);
       //margin-top: ;
    }
`  

export const Input = styled.input`
    align-self: center;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: #23272F;
    color: #fff;
    padding: 0 20px;
    font-size: 1rem;
    &:focus{
        outline: none;
        //outline-color: red;
    }
   
`

export default GlobalStyle