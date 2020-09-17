import React from 'react';
import {Route, Switch} from "react-router-dom"
import './homepage.scss';

import Directory from '../components/directory/directory';

const homepage = () => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default homepage;
