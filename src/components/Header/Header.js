import ClickableElement from "../ClickableElement/ClickableElement";
import Navigation from "../Navigation/Navigation";
import {LINK_TYPES} from "../../utils/Constants";
import {Route} from "react-router-dom";

function Header({isLoggedIn, onLogoClick, onSignIn, onOpenProfile, history}) {

  const pages = ['/movies', '/saved-movies', '/profile', '/'];

  return (
    <Route exact path={pages}>
      <header className="header">
        <ClickableElement
          type={LINK_TYPES.BUTTON}
          className="logo"
          buttonClick={onLogoClick}/>
        <Navigation
          isLoggedIn={isLoggedIn}
          onSignIn={onSignIn}
          onOpenProfile={onOpenProfile}
          history={history}/>
      </header>
    </Route>
  );
}

export default Header;
