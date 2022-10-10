import CustomLink from "../CustomLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import AccountContainer from "../AccountContainer/AccountContainer";

function Header({history}) {
  const location = history.location.pathname;

  return (
    <div className="header">
      <CustomLink
        to='/'
        type='button'
        className='logo'/>
      {location !== '/' &&
        <Navigation
          history={history}/>}
      <AccountContainer/>
    </div>
  );
}

export default Header;
