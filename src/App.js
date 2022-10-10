
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:"/",
            loader:()=>fetch('tshirt.json'),
            element:<Home></Home>
          },
          {
            path:"/Orders",
            element:<Orders></Orders>,
          },
          {
            path:"/about",
            element:<About></About>
          }
        ]
      }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
