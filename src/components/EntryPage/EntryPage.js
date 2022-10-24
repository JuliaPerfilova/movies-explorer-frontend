import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function EntryPage({
  title,
  buttonName,
  bottomText,
  bottomLinkText,
  bottomLink,
  onSubmit,
  onLogoClick}) {

  return (
    <section className="entry-page">
      <ClickableElement
        buttonClick={onLogoClick}
        type={LINK_TYPES.BUTTON}
        className="logo">
      </ClickableElement>
      <h2 className="entry-page__title">{title}</h2>
      <form onSubmit={onSubmit} className="entry-page__form">
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
            defaultValue='pochta@yandex.ru'
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
            defaultValue='PASSWORD'
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
          className='entry-page__submit-button'>
          {buttonName}
        </ClickableElement>
        <p className="entry-page__bottom-text">
          {bottomText}
          <ClickableElement
            to={bottomLink}
            type={LINK_TYPES.LINK}
            className='entry-page__link'>
            {bottomLinkText}
          </ClickableElement>
        </p>
      </form>
    </section>
  );
};

export default EntryPage;
