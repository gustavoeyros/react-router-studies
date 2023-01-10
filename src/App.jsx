import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
