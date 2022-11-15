import EntryPage from "../EntryPage/EntryPage";
import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";
import {useState} from "react";
import RequestError from "../RequestError/RequestError";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import {Redirect} from "react-router-dom";


function Login({isLoggedIn, onLogoClick, onLoginSubmit}) {

  const [submitButtonText, setSubmitButtonText] = useState('Войти');
  const [requestError, setRequestError] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const {values, handleInputChange, errors, isValid, resetForm} = useFormWithValidation();

  const handleSubmit = () => {
    setIsFormDisabled(true)
    setSubmitButtonText('Вход...');
    onLoginSubmit(values.email, values.password)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        setRequestError(err);
        console.log(err)
      })
      .finally(() => {
        setIsFormDisabled(false)
        setSubmitButtonText('Войти');
      });
  }

  return (
    <>
      {
        isLoggedIn
          ? <Redirect to={"/"}/>
          : <EntryPage
              onLogoClick={onLogoClick}
              onSubmit={handleSubmit}
              title="Рады видеть!">
              <label className="entry-page__label">E-mail
                <input
                  id="email"
                  type="email"
                  value={values.email || ''}
                  onChange={handleInputChange}
                  className="entry-page__input"
                  name="email"
                  minLength="5"
                  maxLength="30"
                  disabled={isFormDisabled}
                  required
                />
                <span className="entry-page__input-error">
                  {errors.email || ''}
                </span>
              </label>
              <label className="entry-page__label">Пароль
                <input
                  id="password"
                  type="password"
                  value={values.password || ''}
                  onChange={handleInputChange}
                  className="entry-page__input"
                  name="password"
                  minLength="6"
                  maxLength="30"
                  disabled={isFormDisabled}
                  required
                />
                <span className="entry-page__input-error">
                  {errors.password || ''}
                </span>
              </label>
              <RequestError
                className="entry-page__request-error entry-page__request-error_type_login"
                errorText={requestError}/>
              <ClickableElement
                type={LINK_TYPES.BUTTON}
                isButtonSubmit={true}
                className={`entry-page__submit-button${!isValid || isFormDisabled ? ' entry-page__submit-button_disabled' : ''}`}>
                {submitButtonText}
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
      }
    </>
  );
}

export default Login;
