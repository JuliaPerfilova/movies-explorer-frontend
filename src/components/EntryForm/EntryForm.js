import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function EntryForm ({
  title,
  buttonName,
  subtitle
}) {

  return (
    <section className="entry-form">
      <ClickableElement
        type={LINK_TYPES.BUTTON}
        className="logo">
      </ClickableElement>
      <h2 className="entry-form__title">{title}</h2>
      <form className="entry-form__form">
          <label className="entry-form__inputs">Имя
            <input
              id="name"
              type="text"
              className="entry-form__input"
              name='name'
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <label className="entry-form__inputs">E-mail
            <input
              id="email"
              type="email"
              className="entry-form__input"
              name="email"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="entry-form__error">
              Что-то пошло не так...
            </span>
          </label>
          <label className="entry-form__inputs">Пароль
            <input
              id="password"
              type="password"
              className="entry-form__input"
              name="password"
              minLength="6"
              maxLength="30"
              required
            />
          </label>
        <button
          className="entry-form__submit-button"
          type="submit"
        >
          {buttonName}
        </button>
        <p className="entry-form__subtitle">{subtitle}</p>
      </form>
    </section>
  );
};
  
export default EntryForm;