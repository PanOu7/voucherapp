import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/Layout";
import NoFoundPage from "./pages/NoFoundPage";
import ProductPage from "./pages/ProductPage";
import React from "react";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserProfileChangeNamePage from "./pages/UserProfileChangeNamePage";
import UserProfileChangeImagePage from "./pages/UserProfileChangeImagePage";
import UserProfileChangePasswordPage from "./pages/UserProfileChangePasswordPage";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },

          {
            path: "product-create",
            element: <ProductCreatePage />,
          },
          {
            path: "product-edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "voucher",
            element: <VoucherPage />,
          },
          ,
          {
            path: "voucher_detail/:id",
            element: <VoucherDetailPage />,
          },
          {
            path: "user-profile",
            children: [
              {
                index: true,
                element: <UserProfilePage />,
              },
              {
                path: "user-change-name",
                element: <UserProfileChangeNamePage />,
              },
              {
                path: "user-change-image",
                element: <UserProfileChangeImagePage />,
              },
              {
                path: "user-change-password",
                element: <UserProfileChangePasswordPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;