import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Bannar from "./Components/Bannar/Bannar";
import Home from "./Components/Home/Home";
import HomeServic from "./Components/HomeService/HomeServic";
import Main from "./Components/Layout/Main";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Servi from "./Components/Servi/Servi";
import Services from "./Components/Services/Services";
// import SingleService from "./Components/SingleService/SingleService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/singlService/:id",
        element: <Servi></Servi>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
