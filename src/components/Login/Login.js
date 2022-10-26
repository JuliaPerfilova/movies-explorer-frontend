import EntryPage from "../EntryPage/EntryPage";
import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";


function Login({onLogoClick, onSigninSubmit}) {

  return (
    <EntryPage
      onLogoClick={onLogoClick}
      onSubmit={onSigninSubmit}
      title="Рады видеть!"
    >
      <label className="entry-page__label">E-mail
        <input
          id="email"
          type="email"
          defaultValue="pochta@yandex.ru"
          className="entry-page__input"
          name="email"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="entry-page__error"></span>
      </label>
      <label className="entry-page__label">Пароль
        <input
          id="password"
          type="password"
          className="entry-page__input"
          name="password"
          minLength="6"
          maxLength="30"
          required
        />
        <span className="entry-page__error"></span>
      </label>
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        isButtonSubmit={true}
        className="entry-page__submit-button entry-page__submit-button_type_login">
        Войти
      </ClickableElement>
      <p className="entry-page__bottom-text">
        Ещё не зарегистрированы?
        <ClickableElement
          to="/signup"
          type={LINK_TYPES.LINK}
          className="entry-page__link">
          Регистрация
        </ClickableElement>
      </p>
    </EntryPage>
  );
};
export default Login;
