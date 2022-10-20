import ClickableElement from "../ClickableElement/ClickableElement";
import {LINK_TYPES} from "../../utils/Constants";
import Preloader from "../Preloader/Preloader";

function Loader({isLoading, isMoreButtonToShow, handleMoreButtonClick}) {

  return (
    <section className='loader'>
      {isLoading ?
        <Preloader/> :
        isMoreButtonToShow &&
        <ClickableElement
          className='loader__more-button'
          buttonClick={handleMoreButtonClick}
          type={LINK_TYPES.BUTTON}>
          Ещё
        </ClickableElement>}
    </section>
  );
}

export default Loader;
