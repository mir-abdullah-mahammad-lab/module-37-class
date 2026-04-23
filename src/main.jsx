import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles'
import Laptops from './components/Laptops/Laptops';

const router = createBrowserRouter([
 
  {
    path :"/about",
    element: <div>About Me</div>
  },
  {
    path: "/blogs",
    element: <div>All blogs are here</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "/",
    Component: Root,
    children:[
      { index: true, Component: Home },
      {path:'mobiles', Component: Mobiles},
      {path:"laptops" , Component: Laptops},
      {path: "users", Component: Users}
    ]

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />,
  </StrictMode>,
)
