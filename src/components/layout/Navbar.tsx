import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Tax Services', to: '/tax-services' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Tax Center', to: '/tax-center' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-mark">TLA</span>
          <div>
            <h1>TrustLedger Accounting</h1>
            <p>Small Firm Personality, Big Firm Capability</p>
          </div>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <div className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>

              {(item.label === 'About' ||
                item.label === 'Services' ||
                item.label === 'Tax Center' ||
                item.label === 'Resources') && (
                <div className="dropdown-menu">
                  {item.label === 'About' && (
                    <>
                      <span className="dropdown-title">About</span>
                      <span className="dropdown-link">Our Values</span>
                      <span className="dropdown-link">Client Reviews</span>
                      <span className="dropdown-link">Meet Our Team</span>
                    </>
                  )}

                  {item.label === 'Services' && (
                    <>
                      <span className="dropdown-title">Business Services</span>
                      <span className="dropdown-link">Small Business Accounting</span>
                      <span className="dropdown-link">Payroll</span>
                      <span className="dropdown-link">Part-Time CFO Services</span>
                      <span className="dropdown-link">Audits - Reviews - Compilations</span>
                      <span className="dropdown-link">Strategic Business Planning</span>
                      <span className="dropdown-link">New Business Formation</span>
                      <span className="dropdown-link">Non-Profit Organizations</span>
                      <span className="dropdown-link">Internal Controls</span>
                      <span className="dropdown-link">Bookkeeping Services</span>

                      <span className="dropdown-title">Tax Services</span>
                      <span className="dropdown-link">Tax Preparation</span>
                      <span className="dropdown-link">Tax Planning</span>
                      <span className="dropdown-link">Estate &amp; Trust Tax Services</span>
                      <span className="dropdown-link">Tax Problems</span>

                      <span className="dropdown-title">Additional Services</span>
                      <span className="dropdown-link">Bookkeeping Software &amp; Support</span>
                      <span className="dropdown-link">Software Setup</span>

                      <span className="dropdown-title">Industries</span>
                      <span className="dropdown-link">Construction</span>
                      <span className="dropdown-link">Restaurants</span>
                      <span className="dropdown-link">Real Estate</span>
                      <span className="dropdown-link">Retailers</span>
                      <span className="dropdown-link">Entertainment</span>
                      <span className="dropdown-link">Non Profits &amp; Churches</span>
                    </>
                  )}

                  {item.label === 'Tax Center' && (
                    <>
                      <span className="dropdown-title">Tax Center</span>
                      <span className="dropdown-link">Track Your Refund</span>
                      <span className="dropdown-link">Tax Due Dates</span>
                      <span className="dropdown-link">Tax Rates</span>
                      <span className="dropdown-link">IRS Tax Forms and Publications</span>
                      <span className="dropdown-link">Record Retention Guide</span>
                      <span className="dropdown-link">State Tax Forms</span>
                    </>
                  )}

                  {item.label === 'Resources' && (
                    <>
                      <span className="dropdown-title">Newsletter</span>
                      <span className="dropdown-link">This Month&apos;s Newsletter</span>
                      <span className="dropdown-link">Previous Newsletters</span>

                      <span className="dropdown-title">Guides</span>
                      <span className="dropdown-link">Life Events</span>
                      <span className="dropdown-link">Business Strategies</span>
                      <span className="dropdown-link">Investment Strategies</span>
                      <span className="dropdown-link">Tax Strategies for Business Owners</span>
                      <span className="dropdown-link">Tax Strategies for Individuals</span>
                      <span className="dropdown-link">Frequently Asked Questions</span>

                      <span className="dropdown-title">Tools</span>
                      <span className="dropdown-link">Financial Calculators</span>
                      <span className="dropdown-link">Client Portal</span>
                      <span className="dropdown-link">SecureSend</span>
                      <span className="dropdown-link">Internet Links</span>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar