import { Menu } from 'antd'; // 按需引入antd组件
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import userImg from '../../assets/img/user.png';

// 左侧菜单导航区
const LeftMenu = ({ MenuItemRouters }) => {
    const [collapsed, setCollapsed] = useState(false); // 菜单收缩状态
    const navigate = useNavigate();
    const onSelect = (e) => {
        console.log('click ', e);
        navigate(e.key)
    };
    return (
        <div style={{ width: '240px', height: '100%' }}>
            <div>
                <img
                    src={userImg}
                    alt="Logo"
                    style={{ width: '100%', height: 'auto', marginBottom: '16px' }}
                    onClick={() => setCollapsed(!collapsed)} // 点击图片收缩菜单
                />
            </div>
            <Menu
                style={{ height: '100%' }}
                defaultSelectedKeys={['/']}
                mode="inline"
                theme="dark"
                items={MenuItemRouters}
                inlineCollapsed={collapsed}
                onSelect={onSelect}
            />
        </div>
    )
}

export default LeftMenu