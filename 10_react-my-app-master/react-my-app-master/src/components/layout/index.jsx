import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router'

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Flex, Menu } from 'antd';
const items = [
  {
    key: 'start',
    icon: <PieChartOutlined />,
    label: '开始',
  },
  {
    key: 'nav',
    icon: <DesktopOutlined />,
    label: '路由',
  },
  {
    key: 'lazy-about',
    icon: <DesktopOutlined />,
    label: '路由懒加载',
  },
  {
    key: 'parent',
    icon: <ContainerOutlined />,
    label: '父传子',
  },
  {
    key: 'context',
    icon: <ContainerOutlined />,
    label: '父传孙（useContext）',
  },
  {
    key: 'slot',
    icon: <ContainerOutlined />,
    label: '插槽',
  },
  {
    key: 'style',
    icon: <ContainerOutlined />,
    label: '样式编写',
  },
  {
    key: 'state',
    icon: <ContainerOutlined />,
    label: 'Hooks-useState',
  },
  {
    key: 'effect',
    icon: <ContainerOutlined />,
    label: 'Hooks-useEffect',
  },
  {
    key: 'ref',
    icon: <ContainerOutlined />,
    label: 'Hooks-useRef',
  },
  {
    key: 'reducer',
    icon: <ContainerOutlined />,
    label: 'Hooks-useReducer',
  },
  {
    key: 'context-hooks',
    icon: <ContainerOutlined />,
    label: 'Hooks-useContext',
  },
  {
    key: 'mome',
    icon: <ContainerOutlined />,
    label: 'Hooks-useMome',
  },
  {
    key: 'callback',
    icon: <ContainerOutlined />,
    label: 'Hooks-useCallBack',
  },
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSelect = (e) => {
    console.log('click ', e);
    navigate(e.key)
  };
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#001529',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['start']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onSelect={onSelect}
      />
    </div>
  );
};


const AppLayout = () => {
  return (
    <div style={ {display: 'flex', flexDirection: 'row'} }>
      <App />
      <div style={ {flex: 1, padding: '20px'} }>
        <Outlet />
      </div>
    </div> 
  )
}
export default AppLayout;