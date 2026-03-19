const newsletterItems = ["This Month's Newsletter", 'Previous Newsletters']

const guideItems = [
  'Life Events',
  'Business Strategies',
  'Investment Strategies',
  'Tax Strategies for Business Owners',
  'Tax Strategies for Individuals',
  'Frequently Asked Questions',
]

const toolItems = ['Financial Calculators', 'Client Portal', 'SecureSend', 'Internet Links']

function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h2>Guides, tools, and practical client resources.</h2>
          <p className="page-hero-text">
            This section brings together educational content and useful tools for
            business owners, individuals, and returning clients.
          </p>
        </div>
      </section>

      <section className="page-section container">
        <h2>Newsletter</h2>
        <div className="grid-2">
          {newsletterItems.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Starter placeholder for newsletter content and archive access.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section alt">
        <div className="container">
          <h2>Guides</h2>
          <div className="grid-2">
            {guideItems.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
                <p>Starter placeholder for this guide category.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section container">
        <h2>Tools</h2>
        <div className="grid-2">
          {toolItems.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Starter placeholder for this resource tool or external integration.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Resources