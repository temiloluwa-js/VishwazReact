import React from 'react'

function FunctionClick() {
  const clickHandle = () => {
      console.log('Button clicked')
  }
   
    return(
    <button onClick={clickHandle}></button>
        )
  
}

export default FunctionClick