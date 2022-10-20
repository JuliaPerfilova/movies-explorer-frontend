import Header from "../Header/Header";
import {Route, Switch, useHistory, withRouter} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import {useEffect, useState} from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {TEMP_MOVIES_ARR} from "../../utils/Constants";

function App() {
  const history = useHistory();

  console.log(process.env.PUBLIC_URL);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moviesArr, setMoviesArr] = useState(TEMP_MOVIES_ARR);
  const [savedMoviesArr, setSavedMoviesArr] = useState([]);

  useEffect(() => {
    setSavedMoviesArr(
      moviesArr.filter((movie) => {
        return movie.isSaved;
      })
    )
  }, [])

  const handleSignIn = () => {
    setIsLoggedIn(true);
    history.push('/movies');
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    history.push('/');
  }

  const handleSaveMovie = () => {

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
          <Route path="/signin">
            <Login/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
            savedMoviesArr={savedMoviesArr}/>
          </Route>
          <Route path="/movies">
            <Movies
              moviesArr={moviesArr}/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default withRouter(App);
