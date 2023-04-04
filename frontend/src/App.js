import React from "react";
import RecoInput from "./components/RecoInput";
import Output from "./components/Output";
import Navbar from "./components/navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/recommend",
    element: <RecoInput/>,
  },
  {
    path: "/output",
    element: <Output/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
