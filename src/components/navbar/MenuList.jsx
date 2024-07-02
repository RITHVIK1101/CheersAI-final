import React from 'react'
import './Navbar.css';
import {Menu} from 'antd';
import {HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined} from '@ant-design/icons'

const MenuList = () => {
  return (
      <Menu className='menu-bar' mode = 'inline'>
        <Menu.Item key = "home" icon ={<HomeOutlined/>}>Home</Menu.Item>
        <Menu.SubMenu key = 'tasks' icon = {<BarsOutlined />} 
        title = "Therapy Suite">
            <Menu.Item key='Sceduling'>Scheduling</Menu.Item>
            <Menu.Item key='Analytics'>Excersizes</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key = "activity" icon ={<AppstoreOutlined/>}>
            Library
        </Menu.Item>
        
        <Menu.Item key = "progress" icon ={<AreaChartOutlined/>}>Goals & Journal</Menu.Item>
        <Menu.Item key = "settings" icon ={<SettingOutlined/>}>Settings</Menu.Item>

      </Menu>
      
      
  )
}

export default MenuList
