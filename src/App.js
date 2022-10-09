import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/", 
          loader: () => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
          },
          element: <Home></Home>
        },
        {
          path: "/order", element: <Order></Order>
        }
      ]
    },
    {
      path: "*", element: <div>
        <h1>404</h1>
        <h2>Sorry, Page Not Found!</h2>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
