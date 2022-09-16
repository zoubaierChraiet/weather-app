// Components
import Weather from "./screens/Weather";

import { Provider } from "react-redux";
import { store } from "./redux/store";

// Styles
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
