import HomePage from './screens/HomePage'
import GlobalStyle, { Container } from './styled'
import { AnimatePresence } from 'framer-motion'


function App() {
 

  return (
    <>
    <AnimatePresence>
      <GlobalStyle/>
       <Container
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          // transition={{delayChildren: 0.5}}
       >
          <HomePage/>
      </Container>
    </AnimatePresence>
     
    </>
   
  )
}

export default App
