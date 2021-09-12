import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InfoPage } from "./components/InfoPage";
import { SolarSystem } from "./components/solar-system";
import { WebGLProvider } from "./contexts/WebGLContext";

function App() {
  return (
    <WebGLProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SolarSystem} />
          <Route path="/info-page" component={InfoPage} />
        </Switch>
      </BrowserRouter>
    </WebGLProvider>
  );
}

export default App;
