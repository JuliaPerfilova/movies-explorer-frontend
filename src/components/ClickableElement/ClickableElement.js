import {Link} from "react-router-dom";
import {LINK_TYPES} from "../../utils/Constants";

function ClickableElement({
                           to = '/',
                           className = '',
                           type = LINK_TYPES.LINK,
                           isExternal = false,
                           buttonClick = () => {},
                           children
                         }) {

  const customClassName = className + ` clickable-element clickable-element_type_${type}`;
  const clickableElement = type === LINK_TYPES.BUTTON ?
    <button className={customClassName} onClick={buttonClick}>{children}</button> :
    isExternal ?
      <a href={to} target="_blank" rel="noopener noreferrer" className={customClassName}>{children}</a> :
      <Link
        to={to}
        className={customClassName}>
        {children}
      </Link>;

  return (
    <>
      {clickableElement}
    </>
  );
}

export default ClickableElement;
