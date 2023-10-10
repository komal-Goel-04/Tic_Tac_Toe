import React from 'react'
import './game.css'

function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    // style={{
        // border: "1.5px solid", 
        // height: "100px", 
        // width: "100px", 
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center" ,
        // border_radius: "5px"
        // }}
    className='square'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
