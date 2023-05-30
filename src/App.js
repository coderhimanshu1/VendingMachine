import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Chips from "./Chips";
import Coffee from "./Coffee";
import Soda from "./Soda";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
