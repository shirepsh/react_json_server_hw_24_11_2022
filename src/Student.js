import React from 'react'
import calcButton from './Style'

const Student = (props) => {

  const hadleClick = () => {
    alert('do someting')
}  
  return (
      <div class="card" style={{width: "18rem", margin:"30px"}}>
      <img src={`https://picsum.photos/200/30${props.mykey}`} class="card-img-top" alt="..."></img>
      <div class="card-title">name: {props.student.name}</div>
      <div class="card-body">
      <p class="card-text">age: {props.student.age}</p> 
      <button style={calcButton} onClick={hadleClick}>go somewhere</button>
  </div>
</div>
  )
}

export default Student