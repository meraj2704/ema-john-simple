import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
const router = createBrowserRouter ([
  {
    path:'/',
    element: <Home></Home>,
    children : [
      {
        path:'shop',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
