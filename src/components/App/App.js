import Header from "../Header/Header";
import {Route, Switch, useHistory, withRouter} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";

function App() {
  const history = useHistory();

  return (
    <div className="app">
      <div className="page">
        <Header
        history={history}/>
        <Switch>
          <Route path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
