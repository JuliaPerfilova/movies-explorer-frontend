import EntryPage from "../EntryPage/EntryPage";
import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function Register({onLogoClick, onSignupSubmit}) {

  return (
    <EntryPage
      onLogoClick={onLogoClick}
      onSubmit={onSignupSubmit}
      title="Добро пожаловать!"
    >
      <label className="entry-page__label">Имя
        <input
          id="name"
          type="text"
          defaultValue="Юлия"
          className="entry-page__input"
          name="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="entry-page__error"></span>
      </label>
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
          defaultValue="PASSWORD"
          className="entry-page__input"
          name="password"
          minLength="6"
          maxLength="30"
          required
        />
        <span className="entry-page__error">
              Что-то пошло не так...
        </span>
      </label>
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        isButtonSubmit={true}
        className="entry-page__submit-button entry-page__submit-button_type_register">
        Зарегистрироваться
      </ClickableElement>
      <p className="entry-page__bottom-text">
        Уже зарегистрированы?
        <ClickableElement
          to="/signin"
          type={LINK_TYPES.LINK}
          className="entry-page__link">
          Войти
        </ClickableElement>
      </p>
    </EntryPage>
  );
}

export default Register;
