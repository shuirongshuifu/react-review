import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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


import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />

      {/* layout */}
      <Route element={<AppLayout />}>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Route>

      {/* prefix */}
      <Route path="concerts">
        <Route index element={<ConcertsIndex />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="lazy-about" element={<LazyAbout />} />
        <Route path="start" element={< Start/>} />

        <Route path="parent" element={< Parent/>} />
        <Route path="context" element={< ContextPage/>} />
        <Route path="slot" element={< SlotPage/>} />
        <Route path="style" element={< StylePage/>} />
        <Route path="state" element={< UseStatePage/>} />
        <Route path="effect" element={< UseEffectPage/>} />
        <Route path="ref" element={< UseRefPage/>} />
        <Route path="reducer" element={< UseReducerPage/>} />
        <Route path="context-hooks" element={< ContextHooksPage/>} />
        <Route path="mome" element={< UseMomePage/>} />
        <Route path="callback" element={< UseCallbackPage/>} />

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
