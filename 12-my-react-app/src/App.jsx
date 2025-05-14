import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 路由配置数据
import { MenuItemRouters } from './MenuItemRouters';
// 左侧菜单和右侧内容区组件
import LeftMenu from './components/LeftMenu/LeftMenu';
import RightContent from './components/RightContent/RightContent';

// 主应用组件
function App() {
  return (
    <>
      <Router future={{
        // 这个是react-router-dom v7的特性
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
        <div className="App">
          <LeftMenu MenuItemRouters={MenuItemRouters} />
          <RightContent MenuItemRouters={MenuItemRouters} />
        </div>
      </Router>
    </>
  )
}

export default App
