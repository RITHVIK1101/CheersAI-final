import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from 'react-router-dom';
import Logo from './Logo';
import MenuList from './MenuList';
import './Navbar.css';
import Calendar from '../../containers/calendar/Calender'; // Fix the path here
import Goals from '../../containers/goals/Goals'; // Fix the path here

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
        width={300}
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
        <MenuList className="menu-bar">
          <Link to="/goals">Goals</Link>
          <Link to="/calendar">Calendar</Link>
        </MenuList>
      </Sider>
      <Layout>
        <Content style={{ margin: '0px 0px 0 1px', overflow: 'initial', backgroundColor: "" }}>
          <div className="navbar__content_styles">
            <Routes>
              <Route path="/" element={<Calendar />} /> {/* Set Calendar as the default route */}
              <Route path="/goals" element={<Goals />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
