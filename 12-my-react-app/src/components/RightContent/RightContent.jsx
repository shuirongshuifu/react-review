import { Routes, Route } from 'react-router-dom';

// 右侧内容区（路由映射）
const RightContent = ({ MenuItemRouters }) => {
    return (
        <div style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
            <Routes>
                {
                    MenuItemRouters.map((item) => <Route key={item.key} path={item.key} element={item.element} />)
                }
            </Routes>
        </div>
    )
}

export default RightContent