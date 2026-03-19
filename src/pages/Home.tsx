import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">Trusted financial guidance</p>
        <h2>Accounting support built for clarity, confidence, and growth.</h2>
        <p className="hero-text">
          Trust Ledger Accounting helps businesses and individuals stay organized,
          compliant, and financially informed with practical accounting and tax services.
        </p>

        <div className="hero-actions">
          <Link className="button primary" to="/contact">
            Schedule a Consultation
          </Link>
          <Link className="button secondary" to="/services">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home