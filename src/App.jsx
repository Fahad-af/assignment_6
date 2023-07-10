import React from 'react'

import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'



const App = () => {

  return (
    <div>
     <center> <Header title='This is header section'/>  </center> 
     <Content/>
     <Footer footer='footer area' />
    
 
    </div>
  )
}

export default App