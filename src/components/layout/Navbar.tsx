import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <div className="brand">
          <span className="brand-mark">TL</span>
          <div>
            <h1>Trust Ledger Accounting</h1>
            <p>Accounting, Advisory, and Tax Support</p>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar