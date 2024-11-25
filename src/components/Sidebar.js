import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();
    return (
        <Menu
            mode="inline"
            theme="dark"
            style={{ height: '100vh', width: '200px', position: 'fixed' }}
            selectedKeys={[location.pathname]}
        >
            <Menu.Item key="/" icon={<AppstoreOutlined />}>
                <Link to="/">Обзор</Link>
            </Menu.Item>
            <Menu.Item key="/monitoring" icon={<DashboardOutlined />}>
                <Link to="/monitoring">Мониторинг</Link>
            </Menu.Item>
        </Menu>
    );
}

export default Sidebar;
