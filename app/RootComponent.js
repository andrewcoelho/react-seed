import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RootComponent = (props) => (
  <div>
    <Link to="/">Root</Link> | <Link to="dashboard">Dashboard</Link>
    {props.children}
  </div>
);

RootComponent.propTypes = {
  children: PropTypes.object,
};

export default RootComponent;
