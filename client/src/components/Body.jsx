import React from 'react';
import classes from '../style/Body.module.css';

const Body = (props) => (
  <div className={classes.bodyWidth} >
    <img className={classes.picWidth} src="https://hard-coded-components.s3.us-east-2.amazonaws.com/yelp-body.png" />
  </div>
)

export default Body;