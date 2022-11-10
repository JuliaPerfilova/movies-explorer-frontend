import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Loader({isLoading, isMoreButtonToShow, onMoreButtonClick}) {

  return (
    <section className="loader">
      {isLoading ?
        <Preloader/> :
        isMoreButtonToShow &&
        <ClickableElement
          className="loader__more-button"
          buttonClick={onMoreButtonClick}
          type={LINK_TYPES.BUTTON}>
          Ещё
        </ClickableElement>}
    </section>
  );
}

export default Loader;
