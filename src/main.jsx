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
import AllDonation from './Componant/Page/AllDonation/AllDonation';
import Details from './Componant/Page/Details/Details';
import PChart from './Componant/Page/PChart/PChart';
import ErrorPage from './Componant/Page/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<AllDonation></AllDonation>,
        loader:()=>fetch('../data.json')
      },
      {
        path:'/pie',
        element:<PChart></PChart>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=>fetch('data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
