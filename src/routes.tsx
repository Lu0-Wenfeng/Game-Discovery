import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetaiilPage from "./pages/GameDetaiilPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetaiilPage /> },
    ],
  },
]);

export default router;
