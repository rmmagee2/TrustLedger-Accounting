import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

type MenuSection = {
  label: string
  to: string
  children?: string[]
}

const menuItems: MenuSection[] = [
  { label: 'Home', to: '/' },
  { label: 'Tax Services', to: '/tax-services' },
  {
    label: 'About',
    to: '/about',
    children: ['Our Values', 'Client Reviews', 'Meet Our Team'],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      'Small Business Accounting',
      'Payroll',
      'Part-Time CFO Services',
      'Audits - Reviews - Compilations',
      'Strategic Business Planning',
      'New Business Formation',
      'Non-Profit Organizations',
      'Internal Controls',
      'Bookkeeping Services',
      'Tax Preparation',
      'Tax Planning',
      'Estate & Trust Tax Services',
      'Tax Problems',
      'Bookkeeping Software & Support',
      'Software Setup',
      'Construction',
      'Restaurants',
      'Real Estate',
      'Retailers',
      'Entertainment',
      'Non Profits & Churches',
    ],
  },
  {
    label: 'Tax Center',
    to: '/tax-center',
    children: [
      'Track Your Refund',
      'Tax Due Dates',
      'Tax Rates',
      'IRS Tax Forms and Publications',
      'Record Retention Guide',
      'State Tax Forms',
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      "This Month's Newsletter",
      'Previous Newsletters',
      'Life Events',
      'Business Strategies',
      'Investment Strategies',
      'Tax Strategies for Business Owners',
      'Tax Strategies for Individuals',
      'Frequently Asked Questions',
      'Financial Calculators',
      'Client Portal',
      'SecureSend',
      'Internet Links',
    ],
  },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (label: string) => {
    setOpenSection((current) => (current === label ? null : label))
  }

  return (
    <header className="site-header accordion-header">
      <div className="container accordion-container">
        <Link to="/" className="accordion-brand">
          <div className="brand-logo-wrap">
            <div className="brand-arc" />
            <div className="brand-logo-text">
              <span className="brand-initials">TLA</span>
              <span className="brand-full-name">TrustLedger Accounting</span>
            </div>
          </div>
        </Link>

        <nav className="accordion-nav">
          {menuItems.map((item) => {
            const isOpen = openSection === item.label
            const hasChildren = Boolean(item.children?.length)

            return (
              <div className="accordion-item" key={item.label}>
                <div className="accordion-row">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? 'accordion-link active' : 'accordion-link'
                    }
                  >
                    {item.label}
                  </NavLink>

                  {hasChildren && (
                    <button
                      type="button"
                      className="accordion-toggle"
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${item.label}`}
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  )}
                </div>

                {hasChildren && isOpen && (
                  <div className="accordion-panel">
                    {item.children!.map((child) => (
                      <div className="accordion-sublink" key={child}>
                        {child}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar