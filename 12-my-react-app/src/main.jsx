import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'antd/dist/reset.css'; // 引入 Ant Design 样式

// React 19 兼容性补丁 https://ant.design/docs/react/v5-for-19-cn
import '@ant-design/v5-patch-for-react-19'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
