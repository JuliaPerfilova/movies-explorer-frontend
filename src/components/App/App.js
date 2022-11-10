import Header from "../Header/Header";
import {Route, Switch, useHistory, withRouter} from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import {useEffect, useState} from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import api from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesArr, setSavedMoviesArr] = useState([]);

  const handleLogin = (isFromLoginPage = false) => {
    api.getMyProfile()
      .then((user) => {
        if (user.data) {
          setCurrentUser(user.data);
          setIsLoggedIn(true);
          if(isFromLoginPage)
            history.push( '/movies');
        }
      })
      .catch((err) => {
        api.removeToken();
        console.log(err);
      })
      .finally(() => {
        setIsTokenChecked(true)
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.setToken(token);
      handleLogin();
    } else {
      setIsTokenChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn)
      api.getMyMovies()
        .then((savedMoviesArr) => {
          setSavedMoviesArr(savedMoviesArr.data);
        })
  }, [isLoggedIn])

  const handleSignIn = () => {
    history.push('/signin');
  }

  const handleLoginSubmit = (email, password) => {
    if (!email || !password) {
      console.log("Заполнены не все поля")
      return;
    }
    return api.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          api.setToken(data.token);
          handleLogin(true);
        } else {
          return Promise.reject('Ошибка: ответ на запрос авторизации не содержит поле "token"');
        }
      });
  };

  const handleRegisterSubmit = (name, email, password) => {
    if (!name || !email || !password) {
      console.log("Заполнены не все поля")
      return;
    }
    return api.register(name, email, password)
      .then(() => {
        history.push('/signin');
      });
  }

  const handleUpdateProfileSubmit = (userInfo) => {
    return api.updateProfile(userInfo)
      .then(user => {
        setCurrentUser(user.data);
      });
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('keyword');
    localStorage.removeItem('isShortMovies');
    localStorage.removeItem('moviesByKeyword');
    api.removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
    history.push('/');
  }

  const handleOpenProfile = () => {
    history.push('/profile');
  }

  const handleLogoClick = () => {
    history.push('/');
  }

  const handleSaveMovie = (movie) => {
    return api.saveMovie(movie)
      .then(newMovie => {
        setSavedMoviesArr([newMovie.data, ...savedMoviesArr]);
      })
  };

  const handleDeleteMovie = (movieId) => {
    return api.deleteMovie(movieId)
      .then(() => {
        setSavedMoviesArr(state => state.filter(movie => movie._id !== movieId));
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Header
            onLogoClick={handleLogoClick}
            onSignIn={handleSignIn}
            onOpenProfile={handleOpenProfile}
            isLoggedIn={isLoggedIn}
            history={history}/>
          <Switch>
            <ProtectedRoute
              isTokenChecked={isTokenChecked}
              isLoggedIn={isLoggedIn}
              path="/saved-movies">
              <SavedMovies
                savedMoviesArr={savedMoviesArr}
                onDeleteClick={handleDeleteMovie}/>
            </ProtectedRoute>
            <ProtectedRoute
              isTokenChecked={isTokenChecked}
              isLoggedIn={isLoggedIn}
              path="/movies">
              <Movies
                savedMoviesArr={savedMoviesArr}
                onSaveClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}/>
            </ProtectedRoute>
            <ProtectedRoute
              isTokenChecked={isTokenChecked}
              isLoggedIn={isLoggedIn}
              path="/profile">
              <Profile
                onUpdate={handleUpdateProfileSubmit}
                onLogOut={handleLogOut}
                currentUser={currentUser}/>
            </ProtectedRoute>
            <Route path="/signin">
              <Login
                isLoggedIn={isLoggedIn}
                onLoginSubmit={handleLoginSubmit}
                onLogoClick={handleLogoClick}/>
            </Route>
            <Route path="/signup">
              <Register
                isLoggedIn={isLoggedIn}
                onRegisterSubmit={handleRegisterSubmit}
                onLogoClick={handleLogoClick}/>
            </Route>


            <Route exact path="/">
              <Main/>
            </Route>

            <Route path="*">
              <NotFound
                history={history}/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
