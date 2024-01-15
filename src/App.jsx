import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Main from './Layout/Main';
import About from './Components/About';

import Hero from './Components/Hero';
import Banner from './Components/Banner';
import Hero2 from './Components/Hero2';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children:[
        {
          path:'/about',
          element:<About></About>

        },
        {
          path:'/banner',
          element:<Banner></Banner>
        },
       
        {
          path:"/hero",
          element:<Hero></Hero>
        },
        {
          path:"/hero2",
          element:<Hero2></Hero2>
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; // Added parentheses here
