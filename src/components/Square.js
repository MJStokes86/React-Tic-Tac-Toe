import React, { Component } from 'react'

const Square = (props) =>  {
        return (
            <button className="square" onClick={props.onClick}>
                {props.value} 
            </button> // {props.value} sets the <Square value={i}/> component
        )
    }
    


export default Square

