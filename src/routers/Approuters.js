import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Approuters = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/detail' element="/CardDetail"/>
            <Route path='/' element=""/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Approuters