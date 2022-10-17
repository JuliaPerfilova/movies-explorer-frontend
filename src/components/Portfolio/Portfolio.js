import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <p className="portfolio__item-name">Статичный сайт</p>
          <ClickableElement
            to='/#'
            type={LINK_TYPES.LINK}
            className='portfolio__item-link'
            isExternal={true}>&#8599;</ClickableElement>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__item-name">Адаптивный сайт</p>
          <ClickableElement
            to='https://juliaperfilova.github.io/russian-travel'
            type={LINK_TYPES.LINK}
            className='portfolio__item-link'
            isExternal={true}>&#8599;</ClickableElement>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__item-name">Одностраничное приложение</p>
          <ClickableElement
            to='/#'
            type={LINK_TYPES.LINK}
            className='portfolio__item-link'
            isExternal={true}>&#8599;</ClickableElement>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
