import React, {useState} from 'react'
import calcButton from './Style.js'


const Calc = () => {
  const [firstNum, setFirstNum] = useState()
  const [secondNum, setSecondNum] = useState()
  const [tot, setTot] = useState()
  

  const sum = () => {
    setTot(Number(firstNum) + Number(secondNum))
  }

  return (
    <div className='Calc'>
      <h4>Add numbers</h4>
      <label>Number 1</label>
          firsr num:<input type="text" onChange={(e) => {setFirstNum(e.target.value)}}></input> <br/>
      <label>Number 2</label>
          sec num: <input type="text" onChange={(e) => {setSecondNum(e.target.value)}}></input> <br/>
      <label>Total</label>
      <input type="text" value={tot}></input>
      <button  style={calcButton} onClick={sum}>calc!</button>
        
    </div>
  )}

export default Calc;

