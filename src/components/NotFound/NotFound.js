import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";

function NotFound({history}) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <ClickableElement
        buttonClick={history.goBack}
        type={LINK_TYPES.BUTTON}
        className="not-found__back-link">
        Назад
      </ClickableElement>
    </section>
  );
}

export default NotFound;
