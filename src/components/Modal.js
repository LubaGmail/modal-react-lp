import React from 'react';
import { Fragment } from 'react';

const Modal = ({ cancelDelete, confirmDelete }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn brn--alt" onClick={cancelDelete}>
        Cancel
      </button>
      <button className="btn" onClick={confirmDelete}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
