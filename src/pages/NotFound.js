import { HOME_ROUTE } from 'config/routes';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Error 404. Sorry page wasn`t found.{``}
      <Link to={HOME_ROUTE}>Back to Home page.</Link>
    </div>
  );
};

export default NotFound;
