import React, { useState } from 'react';
import { Layout } from 'antd';
import MenuList from './MenuList';
import './Navbar.css';
import { HeartOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme="dark"
      width={300}
      className={`navbar__container ${collapsed ? 'collapsed' : ''}`}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div
        className="logo__container"
        onClick={collapsed ? toggleCollapsed : null}
        style={{ cursor: collapsed ? 'pointer' : 'default' }}
      >
        {collapsed ? (
          <HeartOutlined style={{ fontSize: '24px', color: 'white', margin: '0 auto' }} />
        ) : (
          <div className="logo-expanded">
            <span className="logo-text">CHEERSAI</span>
            <HeartOutlined style={{ fontSize: '24px', color: 'white', marginLeft: '8px' }} />
          </div>
        )}
      </div>
      <MenuList className="menu-bar" />
    </Sider>
  );
};

export default Navbar;