import ClickableElement from "../ClickableElement/ClickableElement";
import Navigation from "../Navigation/Navigation";
import AccountContainer from "../AccountContainer/AccountContainer";
import {LINK_TYPES} from "../../utils/Constants";
import {Route} from "react-router-dom";

function Header({isLoggedIn, onLogoClick, onSignIn, onOpenProfile, history}) {

  const pages = ['/movies', '/saved-movies', '/profile', '/'];

  const location = history.location.pathname;

  return (
    <Route exact path={pages}>
      <header className="header">
        <ClickableElement
          type={LINK_TYPES.BUTTON}
          className="logo"
          buttonClick={onLogoClick}/>
        {location !== '/' &&
          <Navigation
            history={history}/>}
        <AccountContainer
          isLoggedIn={isLoggedIn}
          onOpenProfile={onOpenProfile}
          onSignIn={onSignIn}
          history={history}/>
      </header>
    </Route>
  );
}

export default Header;
