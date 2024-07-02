import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './Logo';
import MenuList from './MenuList';
import './Navbar.css';
import { ChatCall } from '../../containers';
import { Calendar } from '../../containers'; 
import {Goals} from '../../containers'
const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme="dark"
        width={300} // Set the width when expanded
        className={`navbar__container ${collapsed ? 'collapsed' : ''}`}
      >
        <div className="header-row">
          {!collapsed && (
            <Button
              type="text"
              className="toggle dark-icon"
              onClick={toggleCollapsed}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          )}
          <div
            className="logo__container"
            onClick={collapsed ? toggleCollapsed : null}
            style={{ cursor: collapsed ? 'pointer' : 'default' }}
          >
            <Logo className="logo-con" />
          </div>
        </div>
        <MenuList className="menu-bar" />
      </Sider>
      <Layout>
        <Content style={{ margin: '0px 0px 0 1px', overflow: 'initial', backgroundColor: ""}}>
          <div className="navbar__content_styles">
            <Goals/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}; 

export default Navbar;
