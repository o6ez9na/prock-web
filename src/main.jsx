import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import { ColorModeButton } from "./components/ui/color-mode";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <Provider value={"dark"}>
    <BrowserRouter>
      <ColorModeButton />
      <App />
    </BrowserRouter>
  </Provider>,
);
