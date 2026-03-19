import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div>
          <h3>TrustLedger Accounting</h3>
          <p>
            Reliable accounting, tax, and advisory support for individuals and
            growing businesses.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>13471 US Highway 17 N</p>
          <p>Hampstead, NC 28443</p>
          <p>
            <a href="tel:+19108055710">(910) 805-5710</a>
          </p>
          <p>
            <a href="mailto:seth@trustledger.com">seth@trustledger.com</a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4>Navigation</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TrustLedger Accounting. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer