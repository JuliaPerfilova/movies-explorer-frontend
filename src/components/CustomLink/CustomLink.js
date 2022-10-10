import {Link} from "react-router-dom";

function CustomLink({to, className, type = 'text', children}) {
  return (
    <Link
      to={to}
      className={className + ` custom-link custom-link_type_${type}`}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
