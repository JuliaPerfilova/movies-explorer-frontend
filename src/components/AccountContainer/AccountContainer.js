import CustomLink from "../CustomLink/CustomLink";
import {useState} from "react";

function AccountContainer() {
  // temp
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className='account-container'>
      {!isLoggedIn && <CustomLink
        to='/signup'
        type='text'
        className='account-container__item'>
        Регистрация
      </CustomLink>}
      <CustomLink
        to={ isLoggedIn ? '/' : '/movies'}
        type='button'
        className='account-container__item'>
        <button
          onClick={handleSignIn}
          className={`account-container__button ${isLoggedIn ?
            'account-container__button_type_profile' :
            'account-container__button_type_login'}`
          }>{`${isLoggedIn ? 'Аккаунт' : 'Войти'}`}
        </button>
      </CustomLink>
    </div>
  );
}

export default AccountContainer;
