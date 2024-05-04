import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import Orders from "./pages/Orders.jsx";
import LoginForm from "./pages/Login.jsx";
import ManageFoods from "./admin/ManageFoods.jsx";
import ManageOrders from "./admin/ManageOrders.jsx";
import ManageUsers from "./admin/ManageUsers.jsx";
import AdminNav from "./admin/AdminNav.jsx";
import Admin from "./admin/Admin.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <NotFound />
  },

  {
    path: "/login",
    element: (
      <Layout>
        <LoginForm />
      </Layout>
    ),
  },

  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },

  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },

  {
    path: "/orders",
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
  },

  {
    path: "/admin",
    element: (
      <>
        <AdminNav />
        <Admin />
      </>
    ),
    children: [
      
      {
        path: "login",
        element: <AdminLogin />
        
      },

      {
        path: "dashboard",
        element: <Dashboard totalProducts={10} totalOrders={5} totalUsers={3} />
      },

      {
        path: "foods",
        element: <ManageFoods />
      },
    
      {
        path: "orders",
        element: <ManageOrders />
      },

      {
        path: "users",
        element: <ManageUsers />
      }
    ],
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
