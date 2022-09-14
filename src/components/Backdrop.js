import React from 'react';
import { Fragment } from 'react';

const Backdrop = ({hideModal}) => {
  return <div className="backdrop" 
      onClick={hideModal}
  />;
};

export default Backdrop;
