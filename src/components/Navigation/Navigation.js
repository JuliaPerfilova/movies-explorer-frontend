import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function Navigation({history}) {
  const location = history.location.pathname;

  return (
    <nav className='navigation'>
      <ClickableElement
        to='/movies'
        type={LINK_TYPES.LINK}
        className={`navigation__item ${location === '/movies' ? 'navigation__item_active' : ''}`}>
        Фильмы
      </ClickableElement>
      <ClickableElement
        to='/saved-movies'
        type={LINK_TYPES.LINK}
        className={`navigation__item ${location === '/saved-movies' ? 'navigation__item_active' : ''}`}>
        Сохранённые фильмы
      </ClickableElement>
    </nav>
  );
}

export default Navigation;
