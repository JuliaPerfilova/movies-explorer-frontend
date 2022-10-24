import EntryPage from "../EntryPage/EntryPage";

function Register({onLogoClick}) {

  return (
    <EntryPage
      onLogoClick={onLogoClick}
      title="Добро пожаловать!"
      bottomText="Уже зарегистрированы?"
      bottomLink='/signin'
      bottomLinkText="Войти"
      buttonName="Зарегистрироваться"
    />
  );
}

export default Register;
