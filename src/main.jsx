import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles'
import Laptops from './components/Laptops/Laptops';
import Users from './components/Users/Users';
import Users2 from './components/Users2/Users2';
import UsersDetails from './components/UsersDetails/UsersDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const userPromise =fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())

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
      { path: "users", loader:() => fetch('https://jsonplaceholder.typicode.com/users') ,Component: Users},
      {path: 'users2',element:<Suspense fallback={ <span> Loading ...</span>}>
           <Users2 userPromise={userPromise}></Users2>
             </Suspense>},
     {path: "users/:usersId",
    loader: ({params}) => {
      console.log('param In sise the loader', params.usersId)
       return fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`)
      
    },
    Component: UsersDetails
  },
  { path:"posts", 
    loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
    Component: Posts
  },
    
  {path:'posts/:postId',loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    Component: PostDetails }

  ]

  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />,
  </StrictMode>,
)
