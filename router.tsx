import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import ProductDetail from "./src/pages/ProductDetail";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop/:productId",
    element: <ProductDetail />,
  },
]);

export default routes;
