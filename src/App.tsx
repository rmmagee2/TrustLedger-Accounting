import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App