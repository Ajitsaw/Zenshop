import React from 'react'
import { BrowserRouter } from 'react-router-dom'


function RouteWrapper({children}) {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}

export default RouteWrapper