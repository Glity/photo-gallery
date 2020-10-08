import React from 'react';
import Main from './Main.jsx';
import classes from './style/Modal.module.css';

const Modal = (props) => {
  return (
    <div
    className={classes.bgModal}>
           <div className={classes.close}>
        <span onClick={props.toggleModal} className={classes.closeText}>
          Close
        </span>
        <i className="fas fa-times" />
      </div>
      <Main currentImage={props.currentImage} next={props.next} prev={props.prev} data={props.data} toggleModal={props.toggleModal}
      imageList={props.imageList}
      />
    </div>
  )
}

export default Modal;