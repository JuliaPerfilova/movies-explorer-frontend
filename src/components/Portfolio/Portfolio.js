import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <ClickableElement
              to="https://github.com/JuliaPerfilova/how-to-learn"
              type={LINK_TYPES.LINK}
              isExternal={true}
              className="portfolio__list-container">
                <p className="portfolio__item-name">Статичный сайт</p>
                <p className="portfolio__item-link">&#8599;</p>
            </ClickableElement>
          </li>
          <li className="portfolio__list-item">
            <ClickableElement
              to="https://juliaperfilova.github.io/russian-travel"
              type={LINK_TYPES.LINK}
              isExternal={true}
              className="portfolio__list-container">
                <p className="portfolio__item-name">Адаптивный сайт</p>
                <p className="portfolio__item-link">&#8599;</p>
            </ClickableElement>
          </li>
          <li className="portfolio__list-item">
            <ClickableElement
              to="https://mesto.perfilova.nomoredomains.sbs/"
              type={LINK_TYPES.LINK}
              isExternal={true}
              className="portfolio__list-container">
                <p className="portfolio__item-name">Одностраничное приложение</p>
                <p className="portfolio__item-link">&#8599;</p>
            </ClickableElement>
          </li>
      </ul>
    </section>
  );
}

export default Portfolio;
