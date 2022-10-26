import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";
import {useState} from "react";

function Navigation({isLoggedIn, onSignIn, onOpenProfile, history}) {
  const [isBurgerNav, setIsBurgerNav] = useState(false);

  const handleBurgerOpen = () => {
    setIsBurgerNav(true);
  }

  const handleBurgerClose = () => {
    setIsBurgerNav(false);
  }

  const location = history.location.pathname;

  return (
    <nav className={`navigation${isBurgerNav ? " navigation_burger" : ''}`}>
      {
        isLoggedIn ?
          <>
            <ClickableElement
              type={LINK_TYPES.BUTTON}
              className={`navigation__burger-button${isBurgerNav ? " navigation__burger-button_type_close" : " navigation__burger-button_type_open"}`}
              buttonClick={isBurgerNav ? handleBurgerClose : handleBurgerOpen}>
            </ClickableElement>
            <div className={`navigation__container${isBurgerNav ? " navigation__container_burger" : ''}`}>
              <div className={`navigation__menu${isBurgerNav ? " navigation__menu_burger" : ''}`}>
                <ClickableElement
                  to='/'
                  type={LINK_TYPES.LINK}
                  className={`navigation__menu-item ${location === '/' ? "navigation__menu-item_active" : ''}`}>
                  Главная
                </ClickableElement>
                <ClickableElement
                  to='/movies'
                  type={LINK_TYPES.LINK}
                  className={`navigation__menu-item ${location === '/movies' ? "navigation__menu-item_active" : ''}`}>
                  Фильмы
                </ClickableElement>
                <ClickableElement
                  to='/saved-movies'
                  type={LINK_TYPES.LINK}
                  className={`navigation__menu-item ${location === '/saved-movies' ? "navigation__menu-item_active" : ''}`}>
                  Сохранённые фильмы
                </ClickableElement>
              </div>
              <ClickableElement
                type={LINK_TYPES.BUTTON}
                className="navigation__account-button navigation__account-button_type_profile"
                buttonClick={onOpenProfile}>
                Аккаунт
              </ClickableElement>
            </div>
          </> :
          <>
            <ClickableElement
              to='/signup'
              type={LINK_TYPES.LINK}
              className="navigation__account-item">
              Регистрация
            </ClickableElement>
            <ClickableElement
              type={LINK_TYPES.BUTTON}
              className="navigation__account-button navigation__account-button_type_login"
              buttonClick={onSignIn}>
              Войти
            </ClickableElement>
          </>
      }

    </nav>
  );
}

export default Navigation;
