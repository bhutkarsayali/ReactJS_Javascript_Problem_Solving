import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from "./components/Error";
import ReactIndexPage from "./components/components-react/ReactIndexPage";
import Accordion from "./components/components-react/Accordion";
import JavaScriptIndexPage from "./components/components-javaScript/JavaScriptIndexPage";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

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
        path: "/react/accordion",
        element: <Accordion />,
      },
      {
        path: "/javascript",
        element: <JavaScriptIndexPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}></RouterProvider>);
