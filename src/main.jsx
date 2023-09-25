import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componant/Root/Root.jsx';
import Home from './Componant/Home/Home';
import PieChart from './Componant/Page/PieChart/PieChart';
import AllDonation from './Componant/Page/AllDonation/AllDonation';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<AllDonation></AllDonation>
      },
      {
        path:'/pie',
        element:<PieChart></PieChart>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
