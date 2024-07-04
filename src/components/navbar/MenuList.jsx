import React from 'react';
import './Navbar.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  SettingOutlined,
  BarsOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const MenuList = () => {
  return (
    <Menu className='menu-bar' mode='inline'>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key='scheduling' icon={<BarsOutlined />}>
        <Link to="/calendar">Scheduling</Link>
      </Menu.Item>
      <Menu.Item key='exercises' icon={<CalendarOutlined />}>
        <Link to="/exercises">Exercises</Link>
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        <Link to="/library">Library</Link>
      </Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        <Link to="/goals">Goals & Journal</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
