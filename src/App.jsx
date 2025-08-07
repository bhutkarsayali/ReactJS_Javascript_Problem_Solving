import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./../index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from "./components/Error";
import ReactIndexPage from "./components/React/ReactIndexPage";
import JavaScriptIndexPage from "./components/JavaScript/JavaScriptIndexPage";

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
        path: "/javascript",
        element: <JavaScriptIndexPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}></RouterProvider>);
