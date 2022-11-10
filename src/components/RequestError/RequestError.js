import {MESSAGES} from "../../utils/constants";

function RequestError({className = '', errorText}) {
  return (
    <span className={`request-error${className !== '' ? (' ' + className) : ''}`}>
      {typeof errorText === "string" ? errorText : MESSAGES.SERVER_ERROR}
    </span>
  );
}

export default RequestError;
