import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function AccountContainer({isLoggedIn, onSignIn, onOpenProfile}) {

  return (
    <div className="account-container">
      {!isLoggedIn && <ClickableElement
        to='/signup'
        type={LINK_TYPES.LINK}
        className="account-container__item">
        Регистрация
      </ClickableElement>}
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        className={`account-container__button ${isLoggedIn ?
          'account-container__button_type_profile' :
          'account-container__button_type_login'}`
        }
        buttonClick={isLoggedIn ? onOpenProfile : onSignIn}>
        {`${isLoggedIn ? 'Аккаунт' : 'Войти'}`}
      </ClickableElement>
    </div>
  );
}

export default AccountContainer;
