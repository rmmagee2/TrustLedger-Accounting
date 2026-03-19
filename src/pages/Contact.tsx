function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch with TrustLedger Accounting.</h2>
          <p className="page-hero-text">
            Have a question or need accounting support? Reach out and we’ll be
            glad to connect with you.
          </p>
        </div>
      </section>

      <section className="page-section container">
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <p><strong>TrustLedger Accounting</strong></p>
            <p>13471 US Highway 17 N</p>
            <p>Hampstead, NC 28443</p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+19108055710">(910) 805-5710</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:seth@trustledger.com">seth@trustledger.com</a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Send Us a Message</h3>
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" />

              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />

              <label htmlFor="bestTime">Best time to call</label>
              <input id="bestTime" name="bestTime" type="text" placeholder="Morning, afternoon, etc." />

              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                name="comments"
                rows={6}
                placeholder="Tell us how we can help."
              />

              <button type="submit" className="button primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact