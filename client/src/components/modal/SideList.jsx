import React from 'react';
import SidePhoto from './SidePhoto.jsx';

import classes from './style/SideList.module.css';

const SideList = (props) => {
  console.log('props in side list', props);
  return (
    <ul className={classes.sideListContainer}>
      {props.imageList.map((photoUrl, key) => {
        return <SidePhoto key={key} photoUrl={photoUrl} />
      })}
    </ul>
);

}

export default SideList;