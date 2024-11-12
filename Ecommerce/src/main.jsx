import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../redux/store";
import Layout from "./Layout.jsx";
import CartProducts from "./components/CartProducts/CartProducts.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
  },
  {
    path: "/product/:id",
    element: <ProductInfo />,
  },
  {
    path: "/cart",
    element: <CartProducts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2rl22f6yw7vt25om.us.auth0.com"
      clientId="KH60joGqPfNCUF3tpFBTi9PGFYJcUAhU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
