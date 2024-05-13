import { Outlet } from 'react-router-dom'

import './App.css'
import { Footer, Header } from './core/components'
import { CartContext } from '@feature/cart/CartContext'
import { useState } from 'react'
import { Meal } from '@feature/restaurants/models/meal.model'


function App() {
  const [mealsInCart, setMealsInCart] = useState<Meal[]>([])

  const contextValue = { meals: mealsInCart, setMeals: setMealsInCart }

  return (
    <>
      <CartContext.Provider value={contextValue}>
        <Header></Header>
        <Outlet></Outlet>
      </CartContext.Provider>
      <Footer></Footer>
    </>
  )
}

export default App
