import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";
import {useState} from "react";

function Profile({
                   onSignOut,
                   onSaveProfile
                 }) {
  const [isEdit, setIsEdit] = useState(false)
  //temp
  const [isError, setIsError] = useState(false)
  const errorText = 'При обновлении профиля произошла ошибка.'

  const handleOpenEdit = () => {
    setIsEdit(true);
  }

  const handleSaveProfile = () => {
    setIsError(true);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Юлия!</h2>
      <form className="profile__form">
        <label className="profile__label">Имя
          <input
            type="text"
            className="profile__input"
            defaultValue='Юлия'
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
        </label>
        <label className="profile__label">E-mail
          <input
            type="email"
            className="profile__input"
            defaultValue='pochta@yandex.ru'
            name="email"
            minLength="2"
            maxLength="30"
            required
          />
        </label>
        {isEdit ?
          <>
            <span className='profile__error'>{isError ? errorText : ''}</span>
            <ClickableElement
              buttonClick={handleSaveProfile}
              type={LINK_TYPES.BUTTON}
              className={`profile__save-button${isError ? ' profile__save-button_disabled' : ''}`}>
              Сохранить
            </ClickableElement>
          </>
           :
          <ClickableElement
            buttonClick={handleOpenEdit}
            type={LINK_TYPES.BUTTON}
            className="profile__edit-button">
            Редактировать
          </ClickableElement>
        }

      </form>
      {!isEdit &&
        <ClickableElement
        buttonClick={onSignOut}
        type={LINK_TYPES.BUTTON}
        className="profile__logout-button">
        Выйти из аккаунта
      </ClickableElement>}

    </section>
  );
};

export default Profile;
