// Suspense是什么？
// Suspense是一个React组件，用于在组件树中等待某些异步操作完成，并显示一个加载指示器。它可以与React.lazy和React.Suspense一起使用，以实现代码分割和懒加载。
// StrictMode是什么？
// StrictMode是一个React组件，用于帮助开发者发现潜在的问题和不推荐的用法。它不会渲染任何UI，但会激活额外的检查和警告。
// React.StrictMode会在开发模式下对组件进行额外的检查，例如检查过时的生命周期方法、意外的副作用等。它不会影响生产构建的性能或行为。
import { StrictMode, lazy, Suspense } from 'react'
import '@ant-design/v5-patch-for-react-19';
// createRoot是什么？
// createRoot是React 18引入的新API，用于创建一个新的根节点，以支持并发渲染和自动批处理。它取代了ReactDOM.render()方法。
// createRoot方法接受一个DOM节点作为参数，并返回一个包含渲染方法的对象。
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'

import App from './App.jsx'
import About from './views/About.jsx'
import AppLayout from './components/layout/index.jsx'
import Page1 from './views/Page1.jsx'
import Page2 from './views/Page2.jsx'
import ConcertsIndex from './views/concerts/Index.jsx'
import City from './views/concerts/city.jsx'
import Trending from './views/concerts/trending.jsx'

import NavIndex from './views/nav/Index.jsx'
import NavPage1 from './views/nav/Page1.jsx'
import NavPage2 from './views/nav/Page2.jsx'
import NavPage3 from './views/nav/Page3.jsx'

import Start from './views/start/Index.jsx'
import Parent from './views/parent/Index.jsx'
import ContextPage from './views/context/index.jsx'
import SlotPage from './views/slot/index.jsx'
import StylePage from './views/style/index.jsx'
import UseStatePage from './views/hooks/use-state/index.jsx'
import UseEffectPage from './views/hooks/use-effect/index.jsx'
import UseRefPage from './views/hooks/use-ref/index.jsx'
import UseReducerPage from './views/hooks/use-reducer/index.jsx'
import ContextHooksPage from './views/hooks/use-context/index.jsx'
import UseMomePage from './views/hooks/use-mome/index.jsx'
import UseCallbackPage from './views/hooks/use-callback/index.jsx'

const LazyAbout = lazy(() => import('./views/About.jsx'))

// BrowserRouter是什么？
// BrowserRouter是React Router库中的一个组件，用于在Web应用程序中实现基于浏览器的路由。它使用HTML5的history API来管理浏览器的历史记录，并根据当前URL渲染相应的组件。
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* fallback是什么意思？
      fallback属性是React.Suspense组件的一个属性，用于指定在异步操作完成之前显示的备用内容。
      */}
      <Suspense fallback={<div className='sus-loading'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />

          {/* layout */}
          {/* 这里的page1和page2，是替代<Outlet />这个组件 */}
          <Route element={<AppLayout />}>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>

          {/* prefix */}
          <Route path="concerts">
            <Route index element={<ConcertsIndex />} />
            {/* /concerts/city */}
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="lazy-about" element={<LazyAbout />} />
            <Route path="start" element={< Start />} />

            <Route path="parent" element={< Parent />} />
            {/* 上下文传递参数 */}
            <Route path="context" element={< ContextPage />} />
            // 这里是2种“插槽”写法的对比
            <Route path="slot" element={< SlotPage />} />
            {/* 这是一个使用styled-components库创建的按钮组件。CSS-in-JS库 */}
            <Route path="style" element={< StylePage />} />
            {/* 这是数字、对象、数组变更的方式 */}
            <Route path="state" element={< UseStatePage />} />
            {/* useEffect相关，父子组件更新 */}
            <Route path="effect" element={< UseEffectPage />} />
            {/* useRef的值，即使组件重新渲染也不会改变。 */}
            <Route path="ref" element={< UseRefPage />} />
            {/* const [state, dispatch] = useReducer(reducer, { age: 42, name: 'John' }); useReducer的用法，reducer也是个方法 */}
            {/* const [state, dispatch] = useImmerReducer(reducer, { age: 42, name: 'John' }); useImmerReducer的用法，reducer也是个方法 */}
            <Route path="reducer" element={< UseReducerPage />} />
            {/* DataContext 本身不是自动全局可用的，但通过在应用顶层提供 Provider，你可以使其在整个应用范围内可用。 */}
            <Route path="context-hooks" element={< ContextHooksPage />} />
            {/* useMemo用于缓存 */}
            <Route path="mome" element={< UseMomePage />} />
            {/* 组件用memo，只有props发生变化时才会子组件重新渲染 */}
            <Route path="callback" element={< UseCallbackPage />} />

            // 不同的传参方式，会有不同的接参方式
            <Route path="nav">
              <Route index element={<NavIndex />} />
              <Route path='page1' element={<NavPage1 />} />
              <Route path='page2' element={<NavPage2 />} />
              <Route path=':id' element={<NavPage3 />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
