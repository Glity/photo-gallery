import React from 'react';
import SideHeader from './SideHeader.jsx';
import classes from './style/SideBar.module.css';
import SideList from './SideList.jsx';

const SideBar = (props) => {
  console.log('props in Modal/SideBar: ', props);
  return (
    <div className={classes.container}>
      <SideHeader />
      <SideList setPic={props.setPic} imageList={props.imageList} />
    </div>
  );
};

export default SideBar;
