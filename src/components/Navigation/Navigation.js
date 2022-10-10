import CustomLink from "../CustomLink/CustomLink";

function Navigation({history}) {
  const location = history.location.pathname;

  return (
    <nav className='navigation'>
      <CustomLink
        to='/movies'
        type='text'
        className={`navigation__item ${location === '/movies' ? 'navigation__item_active' : ''}`}>
        Фильмы
      </CustomLink>
      <CustomLink
        to='/saved-movies'
        type='text'
        className={`navigation__item ${location === '/saved-movies' ? 'navigation__item_active' : ''}`}>
        Сохранённые фильмы
      </CustomLink>
    </nav>
  );
}

export default Navigation;
