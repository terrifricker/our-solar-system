import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { PlanetPage } from "./components/PlanetPage";
import { SolarSystem } from "./components/SolarSystem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/solar-system" component={SolarSystem} />
        <Route path="/planet-page" component={PlanetPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
