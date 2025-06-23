import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routers from './Router/Index'

const App: React.FC = () => {
  return (
    <RouterProvider router={routers} />
  )
}

export default App