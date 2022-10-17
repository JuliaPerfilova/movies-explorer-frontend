import ClickableElement from "../ClickableElement/ClickableElement";
import Navigation from "../Navigation/Navigation";
import AccountContainer from "../AccountContainer/AccountContainer";
import {LINK_TYPES} from "../../utils/Constants";

function Header({isLoggedIn, handleSignIn, handleSignOut, history}) {

  const location = history.location.pathname;
  const handleLogoClick = () => {
      history.push('/');
  }

  return (
    <div className="header">
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        className='logo'
        buttonClick={handleLogoClick}/>
      {location !== '/' &&
        <Navigation
          history={history}/>}
      <AccountContainer
        isLoggedIn={isLoggedIn}
        handleSignOut={handleSignOut}
        handleSignIn={handleSignIn}
      history={history}/>
    </div>
  );
}

export default Header;
