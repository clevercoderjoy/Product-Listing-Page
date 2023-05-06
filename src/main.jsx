import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { CartContext, CartContextProvider } from "./contexts/CartContext";

export { CartContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </StrictMode>
);
