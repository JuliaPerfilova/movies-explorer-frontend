import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";

function EntryPage({
  title,
  onSubmit,
  onLogoClick,
  children}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <section className="entry-page">
      <ClickableElement
        buttonClick={onLogoClick}
        type={LINK_TYPES.BUTTON}
        className="logo">
      </ClickableElement>
      <h2 className="entry-page__title">{title}</h2>
      <form onSubmit={handleSubmit} className="entry-page__form" noValidate={true}>
        {children}
      </form>
    </section>
  );
};

export default EntryPage;
