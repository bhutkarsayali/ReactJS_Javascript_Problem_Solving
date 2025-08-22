import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactIndexPage from "./components/react_comps/ReactIndexPage.jsx";
import JavaScriptIndexPage from "./components/js_comps/JavaScriptIndexPage.jsx";
import AccordionPage from "./components/react_comps/AccordionPage.jsx";
import ChipsInputPage from "./components/react_comps/ChipsInputPage.jsx";
import InterviewQuestions from "./components/InterviewQuestions.jsx";

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
      {
        path: "/accordion",
        element: <AccordionPage />,
      },
      {
        path: "/chips",
        element: <ChipsInputPage />,
      },
      {
        path: "/javascript",
        element: <JavaScriptIndexPage />,
      },
      {
        path: "/questions",
        element: <InterviewQuestions />,
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
