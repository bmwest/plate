import React from 'react'

const Instruction = (props) => {
  return (
    <li>
      {props.step}
      <button type="button" onClick={props.handleButtonClick}>Remove</button>
    </li>
  )
}

export default Instruction;