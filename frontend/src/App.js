import React from "react";
import RecoInput from "./components/RecoInput";
import Navbar from "./navbar";
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
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
