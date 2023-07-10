import React, { useState } from 'react'

const Content = () => {
     const [text,settext]=useState(false)
     
     const content = text? <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur fuga itaque nesciunt, earum ducimus eveniet vero ratione ab aliquid. </h1>:<h1>Lorem ipsum dolor sit see more..........</h1>
     let button 
     const show=()=>{
      settext(true)
     }
     const hide=()=>{
      settext(false)
     }
     if(text==false){
      button =( <button onClick={show}>go to show content</button>)
     }else{
      button = ( <button onClick={hide}>go to hide content</button>)
     }
  return (
    <div>
          {content}
          {
            button
          }
          
    </div>
  )
}

export default Content