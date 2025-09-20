import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BubbleMenu from './components/BubbleMenu'
import './App.css'

import Home from './home';
import About from './about';
import Projects from './projects';
import Blog from './blog'
import BlogPost from './blog/BlogPost';

const items = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '/blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'coming soon',
    href: '#',
    ariaLabel: 'coming soon',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Router>

      <BubbleMenu
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogPost/>} />
      </Routes>

    </Router>
    </div>
  )
}

export default App
