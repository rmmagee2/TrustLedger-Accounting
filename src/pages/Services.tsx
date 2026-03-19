import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Tax Preparation',
    description:
      'Preparation and filing support for individuals, families, and businesses with a focus on accuracy and timeliness.',
  },
  {
    title: 'Bookkeeping',
    description:
      'Ongoing transaction recording, reconciliation, and financial organization to keep your books clean and current.',
  },
  {
    title: 'Payroll Support',
    description:
      'Payroll processing assistance, reporting, and record management to help reduce administrative stress.',
  },
  {
    title: 'Business Advisory',
    description:
      'Practical financial guidance for planning, decision-making, performance review, and sustainable growth.',
  },
  {
    title: 'Financial Reporting',
    description:
      'Clear reporting that helps you understand cash flow, profitability, and the overall health of your business.',
  },
  {
    title: 'Entity Support',
    description:
      'Help with business structure considerations, compliance organization, and financial process setup.',
  },
]

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>Accounting and tax services tailored to real client needs.</h2>
          <p className="page-hero-text">
            We support individuals and businesses with dependable financial
            services designed to improve clarity, save time, and support better
            decisions.
          </p>
        </div>
      </section>

      <section className="page-section container">
        <div className="grid-3">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section alt">
        <div className="container split-section">
          <div>
            <h2>Who we help</h2>
            <p>
              Our services are designed for business owners, growing companies,
              and individuals who want a more organized and confident approach
              to their finances.
            </p>
          </div>

          <div>
            <h2>Need something specific?</h2>
            <p>
              Every client situation is different. We can discuss the right mix
              of support based on your goals, reporting needs, and tax
              obligations.
            </p>
            <Link className="button primary" to="/contact">
              Talk With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services