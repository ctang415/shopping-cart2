import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Bag from "./components/Bag/Bag"
import Error from "./components/Error"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Product from "./components/Product/Product"
import Store from "./components/Store/Store"

const Router = () => {

    const router= createBrowserRouter([
      {
        element: <App/>,
        children: [
          {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
          },
          {
            path: "/store",
            element: <Store />,
          },
          {
            path: "/store/:id",
            element: <Product />,
          },
          {
            path: "/bag",
            element: <Bag/>
          }
        ],
      }
      ]);

      return <RouterProvider router={router} />
}

export default Router