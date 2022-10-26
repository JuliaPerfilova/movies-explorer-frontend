import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";

function EntryPage({
  title,
  onSubmit,
  onLogoClick,
  children}) {

  return (
    <section className="entry-page">
      <ClickableElement
        buttonClick={onLogoClick}
        type={LINK_TYPES.BUTTON}
        className="logo">
      </ClickableElement>
      <h2 className="entry-page__title">{title}</h2>
      <form onSubmit={onSubmit} className="entry-page__form">
        {children}
      </form>
    </section>
  );
};

export default EntryPage;
