const taxCenterItems = [
  'Track Your Refund',
  'Tax Due Dates',
  'Tax Rates',
  'IRS Tax Forms and Publications',
  'Record Retention Guide',
  'State Tax Forms',
]

function TaxCenter() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Tax Center</p>
          <h2>Helpful tax tools and reference information in one place.</h2>
          <p className="page-hero-text">
            Use this section as the home for quick-reference tax resources, filing
            support tools, and timely information.
          </p>
        </div>
      </section>

      <section className="page-section container">
        <div className="grid-2">
          {taxCenterItems.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>
                Starter placeholder for this resource page. We can replace each of these
                with live content and direct tools next.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default TaxCenter