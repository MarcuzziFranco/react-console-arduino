import React, { useState } from 'react'
import './selects.css'

export const Selects = () => {
  const [param , setParam]= useState({
    linea: "",
    range: 0
  })
  



  return (
    <div className='contenedor-selects-buttons'>
      <div className='selects'>
        <select name="select">
            <option selected>Newline</option>
            <option value="value2">Linea1</option>
            <option value="value3">Linea2</option>
        </select>
        <select name="select">
            <option selected>Range</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
        </select>
      </div>
        <button> Connect </button>
        
    </div>
  )
}
