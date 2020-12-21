import {Spinner} from 'react-bootstrap';

const Loader = ({size}) => {
  const loaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    paddingTop: '8px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={loaderStyle}>
      <Spinner
        animation="grow"
        variant="primary"
        size={size}
        style={{margin: '5px', marginTop: '20px'}}
      />
      <Spinner
        animation="grow"
        variant="primary"
        size={size}
        style={{margin: '5px', marginTop: '20px'}}
      />
      <Spinner
        animation="grow"
        variant="primary"
        size={size}
        style={{margin: '5px', marginTop: '20px'}}
      />
    </div>
  );
};

export default Loader;
