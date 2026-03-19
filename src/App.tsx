import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import TaxServices from './pages/TaxServices'
import TaxCenter from './pages/TaxCenter'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tax-services" element={<TaxServices />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="tax-center" element={<TaxCenter />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App