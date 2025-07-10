import Home from './pages/Home/Home'
import About from './pages/About/About'
import Dynamic from './pages/Dynamic/Dynamic'
import Watcher from './pages/Watcher/Watcher'
import UseMemo from './pages/UseMemo/UseMemo'
import Computed from './pages/Computed/Computed'
import UseCallback from './pages/UseCallback/UseCallback'

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
        label: '关于常用路由',
        icon: <AndroidOutlined />,
        element: <About />
    },
    {
        key: '/dynamic/:id',
        label: '动态路由',
        icon: <AndroidOutlined />,
        element: <Dynamic />
    },
    {
        key: '/watcher',
        label: 'useEffect',
        icon: <AndroidOutlined />,
        element: <Watcher />
    },
    {
        key: '/useMemo',
        label: 'useMemo&memo',
        icon: <AndroidOutlined />,
        element: <UseMemo />
    },
    {
        key: '/computed',
        label: '计算缓存',
        icon: <AndroidOutlined />,
        element: <Computed />
    },
    {
        key: '/useCallback',
        label: 'useCallback',
        icon: <AndroidOutlined />,
        element: <UseCallback />
    },
    // {
    //     key: '/computed',
    //     label: '爷孙组件通信',
    //     icon: <AndroidOutlined />,
    //     element: <Computed />
    // },
]


/**
 * 路由懒加载
 * */ 
// import { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

// // 使用 lazy 动态导入组件
// const LazyAbout = lazy(() => import('./pages/LazyAbout.jsx'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         {/* 在路由配置中使用懒加载的组件 */}
//         <Route path="lazy-about" element={<LazyAbout />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default App;