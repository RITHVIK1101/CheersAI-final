import React from 'react';
import { FireFilled } from '@ant-design/icons'; // Corrected import statement
import './Navbar.css';

const Logo = () => {
  return (
    <div className='logo__container'>
      <div className='logo-icon'>
        <FireFilled />
      </div>
    </div>
  );
};

export default Logo;
