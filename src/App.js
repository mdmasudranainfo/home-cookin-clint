import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct/AddProduct";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
// import Bannar from "./Components/Bannar/Bannar";
import Home from "./Components/Home/Home";
// import HomeServic from "./Components/HomeService/HomeServic";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import MyReview from "./Components/MyReview/MyReview";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import ReviewUpdate from "./Components/ReviewUpdate/ReviewUpdate";
import Servi from "./Components/Servi/Servi";
import Services from "./Components/Services/Services";
// import SingleService from "./Components/SingleService/SingleService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <Servi></Servi>,
        loader: ({ params }) =>
          fetch(`https://home-cookin-server.vercel.app/service/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            {" "}
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview/:id",
        element: (
          <PrivateRoute>
            <ReviewUpdate></ReviewUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://home-cookin-server.vercel.app/review/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
