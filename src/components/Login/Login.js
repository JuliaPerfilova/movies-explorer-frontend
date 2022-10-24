import EntryPage from "../EntryPage/EntryPage";


function Login({onLogoClick, onSigninSubmit}) {

  return (
    <EntryPage
      onLogoClick={onLogoClick}
      onSubmit={onSigninSubmit}
      title="Рады видеть!"
      bottomText='Ещё не зарегистрированы?'
      bottomLink='/signup'
      bottomLinkText='Регистрация'
      buttonName="Войти"
    />
  );
};
export default Login;
