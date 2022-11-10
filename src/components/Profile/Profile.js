import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES, MESSAGES} from "../../utils/constants";
import {useContext, useEffect, useState} from "react";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function Profile({onLogOut, onUpdate}) {

  const {values, handleInputChange, errors, setValues, isValid} = useFormWithValidation();

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const [isEdit, setIsEdit] = useState(false);

  const [requestError, setRequestError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [submitButtonText, setSubmitButtonText] = useState("Сохранить");

  useEffect(() => {
    setValues({
      name: currentUser.name || '',
      email: currentUser.email || '',
    })
  }, [setValues, currentUser.name, currentUser.email])

  const handleOpenEdit = () => {
    setIsEdit(true);
  }

  const handleSaveProfile = () => {
    setIsFormDisabled(true);
    setSubmitButtonText("Сохранение...");
    onUpdate({name: values.name, email: values.email})
      .then(() => {
        setSuccessMessage(MESSAGES.PROFILE_SAVED);
        setIsEdit(false);
      })
      .catch((err) => {
        setRequestError(err);
        console.log(err);
      })
      .finally(() => {
        setIsFormDisabled(false);
        setSubmitButtonText("Сохранить");
      });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" noValidate={true}>
        <label className="profile__label">Имя
          <input
            value={values.name || ''}
            pattern="^[a-zA-Zа-яёА-ЯЁ\s\-]+$"
            onChange={handleInputChange}
            type="text"
            className="profile__input"
            name="name"
            minLength="2"
            maxLength="30"
            required
            disabled={!isEdit || isFormDisabled}
          />
          <span className="profile__input-error">
            {errors.name || ''}
          </span>
        </label>
        <label className="profile__label">E-mail
          <input
            value={values.email || ''}
            onChange={handleInputChange}
            type="email"
            className="profile__input"
            name="email"
            minLength="5"
            maxLength="30"
            required
            disabled={!isEdit || isFormDisabled}
          />
          <span className="profile__input-error">
            {errors.email || ''}
          </span>
        </label>
        {isEdit ?
          <>
            <span className='profile__error'>{requestError}</span>
            <ClickableElement
              buttonClick={handleSaveProfile}
              type={LINK_TYPES.BUTTON}
              className={`profile__save-button${((values.name === currentUser.name && values.email === currentUser.email) || !isValid || isFormDisabled) ? ' profile__save-button_disabled' : ''}`}>
              {submitButtonText}
            </ClickableElement>
          </>
          :
          <>
            <span className='profile__saved'>{successMessage}</span>
            <ClickableElement
              buttonClick={handleOpenEdit}
              type={LINK_TYPES.BUTTON}
              className="profile__edit-button">
              Редактировать
            </ClickableElement>
          </>
        }

      </form>
      {!isEdit &&
        <ClickableElement
          buttonClick={onLogOut}
          type={LINK_TYPES.BUTTON}
          className="profile__logout-button">
          Выйти из аккаунта
        </ClickableElement>}

    </section>
  );
}

export default Profile;
