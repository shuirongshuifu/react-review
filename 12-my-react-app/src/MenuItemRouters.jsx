import Home from './pages/Home/Home'
import About from './pages/About/About'

import { AndroidOutlined } from '@ant-design/icons';

export const MenuItemRouters = [
    {
        key: '/',
        label: '首页',
        icon: <AndroidOutlined />,
        element: <Home />
    },
    {
        key: '/about',
        label: '关于',
        icon: <AndroidOutlined />,
        element: <About />
    }
]