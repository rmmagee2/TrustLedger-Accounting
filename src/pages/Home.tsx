import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* HERO */}
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

      {/* SERVICES PREVIEW */}
      <section className="page-section container">
        <h2>Our Core Services</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Tax Preparation</h3>
            <p>Accurate and timely filing for individuals and businesses.</p>
          </div>

          <div className="card">
            <h3>Bookkeeping</h3>
            <p>Clean, organized financial records you can rely on.</p>
          </div>

          <div className="card">
            <h3>Business Advisory</h3>
            <p>Strategic guidance to help you grow and make smarter decisions.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="page-section alt">
        <div className="container">
          <h2>Why Trust Ledger?</h2>

          <div className="grid-3">
            <div>
              <h4>Clarity</h4>
              <p>No confusing jargon—just clear financial insight.</p>
            </div>

            <div>
              <h4>Reliability</h4>
              <p>Deadlines met, compliance handled, stress reduced.</p>
            </div>

            <div>
              <h4>Growth Focused</h4>
              <p>We help you understand your numbers—not just record them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section container">
        <h2>Ready to take control of your finances?</h2>
        <Link className="button primary" to="/contact">
          Get Started
        </Link>
      </section>
    </>
  )
}

export default Home