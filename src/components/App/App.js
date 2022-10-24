import Header from "../Header/Header";
import {Route, Switch, useHistory, withRouter} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import {useEffect, useState} from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {TEMP_MOVIES_ARR} from "../../utils/Constants";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moviesArr, setMoviesArr] = useState(TEMP_MOVIES_ARR);
  const [savedMoviesArr, setSavedMoviesArr] = useState([]);

  useEffect(() => {
    setSavedMoviesArr(
      moviesArr.filter((movie) => {
        return movie.isSaved;
      })
    )
  }, [moviesArr])

  const handleSignIn = () => {
    history.push('/signin');
  }

  const handleSigninSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(true);
    history.push('/movies');
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    history.push('/signin');
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    history.push('/');
  }

  const handleOpenProfile = () => {
    history.push('/profile');
  }

  const handleLogoClick = () => {
    history.push('/');
  }


  return (
    <div className="app">
      <div className="page">
        <Header
          onLogoClick={handleLogoClick}
          onSignIn={handleSignIn}
          onOpenProfile={handleOpenProfile}
          isLoggedIn={isLoggedIn}
          history={history}/>
        <Switch>
          <Route path="/saved-movies">
            <SavedMovies
              savedMoviesArr={savedMoviesArr}/>
          </Route>
          <Route path="/movies">
            <Movies
              moviesArr={moviesArr}/>
          </Route>
          <Route path="/signin">
            <Login
              onSigninSubmit={handleSigninSubmit}
              onLogoClick={handleLogoClick}/>
          </Route>
          <Route path="/signup">
            <Register
              onSignupSubmit={handleSignupSubmit}
              onLogoClick={handleLogoClick}/>
          </Route>
          <Route path="/profile">
            <Profile
              onSignOut={handleSignOut}/>
          </Route>

          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default withRouter(App);
