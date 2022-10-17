import Header from "../Header/Header";
import {Route, Switch, useHistory, withRouter} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import {useState} from "react";

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
    history.push('/movies');
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    history.push('/');
  }

  return (
    <div className="app">
      <div className="page">
        <Header
          handleSignIn={handleSignIn}
          handleSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
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
