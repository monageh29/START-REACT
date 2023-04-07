import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import CONTACT from './Component/CONTACT/CONTACT'
import Startreact from './Component/Startreact/Startreact'
import ABOUT from './Component/ABOUT/ABOUT'
import PORTFOLIO from './Component/PORTFOLIO/PORTFOLIO';

const router = createBrowserRouter([
  {path:'/', element:<Layout/>, children:[
    {index:true,element:<Startreact/>},
    {path:'PORTFOLIO',element:<PORTFOLIO/>},
    {path:'ABOUT',element:<ABOUT/>},
    {path:'CONTACT',element:<CONTACT/>}
  ]}
])


function App() {
  return ( <>
<RouterProvider router={router}/>
 
  </>
  
  );
}

export default App;
