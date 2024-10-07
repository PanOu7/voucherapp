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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product-create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product-edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
      ,
      {
        path: "/voucher_detail/:id",
        element: <VoucherDetailPage />,
      },
    ],
  },
]);
export default router;