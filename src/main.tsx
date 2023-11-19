import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EffectFetchPage from "./effect-fetch";
const router = createBrowserRouter([
  {
    path: "/",
    element: <EffectFetchPage />,
  },
]);
const portalDiv = document.getElementById("root")!;
ReactDOM.createRoot(portalDiv).render(
  <main
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
    }}
  >
    <h1 className="text-3xl font-extrabold">
      This is <strong className="text-red-500">CSR</strong>!
    </h1>
    <RouterProvider router={router} />
  </main>
);
