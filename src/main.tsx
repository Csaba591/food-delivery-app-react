import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './feature/home'
import { RestaurantsPage } from './feature/restaurants'
import { PromotionsPage } from './feature/promotions'
import { ProfilePage } from './feature/profile'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <HomePage></HomePage>
      },
      {
        path: 'restaurants',
        element: <RestaurantsPage></RestaurantsPage>
      },
      {
        path: 'promotions',
        element: <PromotionsPage></PromotionsPage>
      },
      {
        path: 'profile',
        element: <ProfilePage></ProfilePage>
      }
    ],
    errorElement: <div>Oops, looks like this page doesn't exist.</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
