import React from 'react';
import { Fragment, useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const deleteHandler = () => {
    setIsModalVisible(true);
  };

  const cancelDelete = () => {
    console.log('Todo.cancelDelete');
    setIsModalVisible(false);
  };

  const confirmDelete = () => {
    console.log('confirmDelete');
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <div>To do: {item}</div>
      <div className="actions">
        {/* <h3 onclick="myFunction(this, 'red')">Click me to change my color.</h3> */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {isModalVisible && <Backdrop hideModal={hideModal} />}
      {isModalVisible && <Modal cancelDelete={cancelDelete} confirmDelete={confirmDelete} />}
    </Fragment>
  );
};

export default Todo;
