import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import Login from "../Components/Pages/LogRegister/Login";
import Register from "../Components/Pages/LogRegister/Register";
import AddAToy from "../Components/Pages/Addtoys/AddAToy";
import MyToy from "../Components/Pages/MyToys/MyToy";
import AllToys from "../Components/Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/add-a-toy',
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: '/my-toys',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
    ]
  },
]);


export default router;