import FaqSection from "../../pages/faq/FaqSection";

function FAQ() {
  return (
    <>
      <div>
        <section className="wpo-faq-section s2 section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="wpo-section-title">
                <h2>Frequently Asked Question</h2>
              </div>
              <div className="col-lg-8 offset-lg-2">
                <FaqSection />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQ;
