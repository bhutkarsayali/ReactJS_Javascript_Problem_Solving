import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <>
      <div>
        <Provider store={appStore}>
          <Header />
          <Outlet></Outlet>
        </Provider>
      </div>
    </>
  );
}

export default App;
