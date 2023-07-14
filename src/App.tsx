import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Product from "./pages/product/Product";
import User from "./pages/User/User";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login.tsx";
import  "./styles/global.scss"



function App() {
 
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
         <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use the layout component as the top-level element
      children: [
        {
          path: "/",
          element: <Home />, // Render the Home component within the Outlet component
        },
        {
          path: "/user",
          element: <User />, // Render the User component within the Outlet component
        },
        {
          path: "/product",
          element: <Product />, // Render the Product component within the Outlet component
        },
      ],
     
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;