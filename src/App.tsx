import { Outlet } from 'react-router-dom'

import './App.css'
import { Footer, Header } from './core/components'


function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
