import {MESSAGES} from "../../utils/constants";

function NothingFound({isServerError}) {
  return (
    <div className="nothing-found">
      {!isServerError && <div className="nothing-found__image"/>}
      <p className="nothing-found__text">{isServerError ? MESSAGES.SERVER_ERROR : MESSAGES.NOTHING_FOUND}</p>
    </div>
  );
}

export default NothingFound;
