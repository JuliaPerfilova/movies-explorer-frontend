import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
            <ClickableElement
              to="https://practicum.yandex.ru/"
              type={LINK_TYPES.LINK}
              className="footer__link"
              isExternal={true}>
              Яндекс.Практикум
            </ClickableElement>
            <ClickableElement
              to="https://github.com/JuliaPerfilova"
              type={LINK_TYPES.LINK}
              className="footer__link"
              isExternal={true}>
              Github
            </ClickableElement>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
