import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import MenuList from './MenuList';
import './Navbar.css';
import Calendar from '../../containers/calendar/Calender'; // Fix the path here
import Goals from '../../containers/goals/Goals'; // Fix the path here
import { HeartOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

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
