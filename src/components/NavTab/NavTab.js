import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <ClickableElement
            to="#about"
            type={LINK_TYPES.LINK}>
            О проекте
          </ClickableElement>
        </li>
        <li className="nav-tab__item">
          <ClickableElement
            to="#technologies"
            type={LINK_TYPES.LINK}>
            Технологии
          </ClickableElement>
        </li>
        <li className="nav-tab__item">
          <ClickableElement
            to="#student"
            type={LINK_TYPES.LINK}>
            Студент
          </ClickableElement>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
