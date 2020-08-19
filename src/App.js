import React from "react";
// import Popular from "./components/popular/Popular";
// import Battle from "./components/battle/Battle";
import Nav from "./components/nav/Nav";
// import NotFound from "./components/not-found/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";
import Loading from "./components/loading/Loading";
// import Results from "./components/results/Results";
import "./App.css";

const Popular = React.lazy(() => import("./components/popular/Popular"));
const Battle = React.lazy(() => import("./components/battle/Battle"));
const Results = React.lazy(() => import("./components/results/Results"));
const NotFound = React.lazy(() => import("./components/not-found/NotFound"));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Nav />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact={true} component={Popular} />
            <Route path="/battle" exact={true} component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
