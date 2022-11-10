import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";
import {Route} from "react-router-dom";

function Footer() {
  const pages = ['/movies', '/saved-movies', '/'];
  return (
    <Route exact path={pages}>
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
              to="https://github.com"
              type={LINK_TYPES.LINK}
              className="footer__link"
              isExternal={true}>
              Github
            </ClickableElement>
          </div>
        </div>
      </footer>
    </Route>
  );
}

export default Footer;
