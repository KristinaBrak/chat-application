import {Spinner} from 'react-bootstrap';
import '../../styles/loader/loader.css';

const Loader = ({size}) => {
  return (
    <div className="loader">
      <Spinner variant="primary" className="spinner" animation="grow" size={size} />
      <Spinner variant="primary" className="spinner" animation="grow" size={size} />
      <Spinner variant="primary" className="spinner" animation="grow" size={size} />
    </div>
  );
};

export default Loader;
