import React, {useState} from 'react'
import calcButton from './Style'

const ComboBox = () => {
    const [color, setColor] = useState("white")

    const doIt = () => {
        document.body.style.background = color
    }

  return (
    <div>
        <h4>change background-color</h4>
        <label>choose a color</label>
        <input type="color" onChange={(e) => {setColor(e.target.value)}}></input> <br/>
        <button  style={calcButton} onClick={doIt}>change!</button>
    </div>
  )
}

export default ComboBox