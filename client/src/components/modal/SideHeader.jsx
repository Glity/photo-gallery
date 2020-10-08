import React from 'react';
import classes from './style/rightPanel.module.css';

const SideHeader = (props) => {
  return (
    <div>
      <h3 className={classes.headerText}>
        Photos fo r The Eagle
      </h3>
      <a href='#' className={classes.link}>See all 1593</a>
    </div>
  )
}

export default SideHeader;