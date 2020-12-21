import React from 'react';
import {Spinner} from 'react-bootstrap';
import './loader.css';

const Loader = ({size}) => (
  <div className="loader">
    <Spinner variant="primary" className="spinner" animation="grow" size={size} />
    <Spinner variant="primary" className="spinner" animation="grow" size={size} />
    <Spinner variant="primary" className="spinner" animation="grow" size={size} />
  </div>
);

export default Loader;
