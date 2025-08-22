import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactIndexPage from "./components/react_comps/ReactIndexPage.jsx";
import JavaScriptIndexPage from "./components/js_comps/JavaScriptIndexPage.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/react",
        element: <ReactIndexPage />,
      },
      // {
      //   path: "/react/accordion",
      //   element: <AccordionPage />,
      // },
      {
        path: "/javascript",
        element: <JavaScriptIndexPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute}></RouterProvider>
  </StrictMode>
);
