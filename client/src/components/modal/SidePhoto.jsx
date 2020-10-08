import React from 'react';
import classes from './style/SidePhoto.module.css';

const SidePhoto = (props) => {
  console.log('props in side photo: ', props);
  return (
    <div
    onClick={props.setPic}
    className={classes.photoWrapper}
    >
      <img
      className={classes.photo}
      src={props.photoUrl}
      />
    </div>
  );
}

export default SidePhoto;