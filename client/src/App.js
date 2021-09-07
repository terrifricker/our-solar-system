import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PlanetPage } from "./components/PlanetPage";
import { SolarSystem } from "./components/solar-system";
import { WebGLProvider } from "./contexts/WebGLContext";

function App() {
  return (
    <WebGLProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/solar-system" component={SolarSystem} />
          <Route path="/planet-page" component={PlanetPage} />
        </Switch>
      </BrowserRouter>
    </WebGLProvider>
  );
}

export default App;
