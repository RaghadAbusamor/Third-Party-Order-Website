import './notFound.css';
import { ReactComponent as Burger } from '../../assets/illustrations/burger.svg';
import { Link } from 'react-router-dom';
import UserPage from '../identify-use/identify-user';

const NotFound = (props) => {
  return (
    <div className="not-found-page">
      <div className="main">
        <Burger />
        <Link to="/user" className='text'  >Go To Root Page :( </Link>
     

      </div>
    </div>
  );
};

export default NotFound;