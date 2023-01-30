import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Teams from './pages/teams/Teams'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App