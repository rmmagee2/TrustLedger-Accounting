import { Link } from 'react-router-dom'

const taxServices = [
  {
    title: 'Tax Preparation',
    description:
      'Preparation and filing support for individuals, families, executives, and businesses.',
  },
  {
    title: 'Tax Planning',
    description:
      'Forward-looking planning to help reduce surprises and support better financial decisions.',
  },
  {
    title: 'Estate & Trust Tax Services',
    description:
      'Guidance for estate-related and trust-related tax filings and related planning needs.',
  },
  {
    title: 'Tax Problems',
    description:
      'Help with unresolved tax matters, notices, compliance issues, and communication with taxing authorities.',
  },
]

const taxProblems = [
  'IRS Audit Representation',
  'Non-Filed Tax Returns',
  'Back Taxes Owed',
  'Payroll Tax Problems',
  'IRS Liens',
  'IRS Levies',
  'IRS Wage Garnishment',
  'IRS Seizures',
  'IRS Payment Plan',
  'Offer In Compromise',
  'Get Your IRS File',
]

function TaxServices() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Tax Services</p>
          <h2>Practical tax support for individuals and businesses.</h2>
          <p className="page-hero-text">
            TrustLedger Accounting provides tax-focused services ranging from preparation
            and planning to help with more complex tax issues.
          </p>
        </div>
      </section>

      <section className="page-section container">
        <div className="grid-2">
          {taxServices.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <h2>Tax Problem Areas</h2>
          <div className="grid-2">
            {taxProblems.map((item) => (
              <div className="list-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section container">
        <h2>Need help with a tax matter?</h2>
        <p className="page-hero-text">
          Reach out to discuss your situation and the right next step.
        </p>
        <Link className="button primary" to="/contact">
          Contact Us
        </Link>
      </section>
    </>
  )
}

export default TaxServices