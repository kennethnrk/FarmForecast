import React from "react";
import RecoInput from "./components/RecoInput";
import PredictInput from "./components/PredictInput";
import Output from "./components/Output";
import Landing from "./components/landing"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/recommend",
    element: <RecoInput/>,
  },
  {
    path: "/predict",
    element: <PredictInput/>,
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
