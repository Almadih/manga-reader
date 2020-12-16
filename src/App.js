import { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home"
import Manga from './Components/Manga'
import Chapter from './Components/Chapter'
import store from "./Components/Redux/Store";
import { fetchMangas } from "./Components/Redux/Actions";

const loadData = () => {
  store.dispatch(fetchMangas)
};

function App(props) {
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/manga/:name">
          <Manga/>
        </Route>
        <Route exact path="/manga/:name/chapter/:id">
          <Chapter/>
        </Route>
      </Switch>
    </Fragment>
  );
}
export default App;
