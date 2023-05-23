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
import ToyDetails from "../Components/Pages/ToyDetails/ToyDetails";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
      {
        path: '/toy-details/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toyDetails/${params.id}`)
      },
    ]
  },
]);


export default router;