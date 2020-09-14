import React from 'react';
import './homepage.scss';

const homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>NUECES Y SEMILLAS</h1>
            <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>ADEREZOS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>QUESOS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>MERMELADAS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <h1 className='title'>POSTRES</h1>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default homepage;
