import "./App.css";
import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "../src/Utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
