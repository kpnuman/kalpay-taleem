/* eslint-disable no-undef */
import { useEffect } from "react";
const heroImage = "/images/hero-image.png";
const paymentIcon = "/images/Icon-payment.png";
const admissionIcon = "/images/Icon-admission.png";
const examIcon = "/images/Icon-exams.png";
const whyTaleem = "/images/why-taleem.png";
const mosque = "/images/mosque.png";
const clock = "/images/clock-Icon.png";
const exam = "/images/examIcon.png";
const faq = "/images/faq.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import ItemsSlider from "./ItemSlider";
import { CardContent, Rating, Typography } from "@mui/material";
import testimonials from './common/TestimonialsData.js';
import Gallery from './common/Gallery.jsx';
const cardWidth = 300;
const cardHeight = 550;


function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="container-fluid hero-section">
        <div className="row">
          <div className="col-md-6 hero-section-left">
            {/* Left Column */}
            <div className="d-flex flex-column justify-content-center align-items-lg-start align-items-center h-100">
              <h1 className="hero-section-study-now-heading">Study Now</h1>
              <h1 className="hero-section-pay-later-heading">Pay Later</h1>
              <h4 className="hero-section-text">
                Manage your educational expenses stress-free!
              </h4>
              <p className="hero-section-para">
                KalPay Taleem aims to remove barriers and make education
                financing easier and more accessible for everyone. With KalPay
                Taleem, you can split your educational expenses in up-to 6
                interest-free monthly instalments, including course fee, examination fees,
                semester fees, hostel dues, etc.
              </p>
              <button className="btn">
                <a target={"_blank"} rel={"noreferrer"} href={"https://docs.google.com/forms/d/e/1FAIpQLScRu-aQshc3C-W0uhmIoBB4MmLzUOUmAMjZV5JIYDJVhgx_OQ/viewform"} className="btn-text">
                  Apply Now
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            {/* Right Column */}
            <div className="d-flex justify-content-center align-items-center hero-img">
              <img src={window.location.origin + heroImage} alt="Your Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="box">
            <div className="box-icon">
              <img src={window?.location?.origin + paymentIcon} alt="Icon 1" />
            </div>
            <h2 className="box-heading">Semester Fee</h2>
            <p className="box-paragraph">
              Breakdown your university semester fee in up to 6 equal monthly
              instalments.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="box">
            <div className="box-icon-2">
              <img src={window.location.origin + admissionIcon} alt="Icon 1" />
            </div>
            <h2 className="box-heading-2">Admission Tests</h2>
            <p className="box-paragraph-2">
              Breakdown your Admission Test fee such as SAT, GRE, GMAT, IELTS,
              TOEFL or PTE exam in up to 6 equal monthly instalments.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="box">
            <div className="box-icon-2">
              <img src={window.location.origin + examIcon} alt="Icon 1" />
            </div>
            <h2 className="box-heading-2">Professional Exams</h2>
            <p className="box-paragraph">
              Breakdown your Professional Exam fee such as ACCA, CFA, CA,
              Actuary and many other exams in up to 6 equal monthly instalments.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid partner-section"
        style={{ height: "auto" }}
      >
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <h2 className="partner-heading">Our Partners</h2>
          </div>
        </div>
        <div className="row justify-content-center mx-2 mt-5">
          <div>
            <div className="px-4">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-white d-lg-flex">
        <div className="col-12 col-lg-6 why-image">
          <img src={window.location.origin + whyTaleem} alt="Your Image" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 why-section d-sm-flex-column">
          <h2 className={"why-choose"}>Why Choose</h2>
          <h2 className={"why-taleem"}>KalPay Taleem?</h2>
          <div className="d-lg-flex why-taleem-content">
            <div className="why-section-icon">
              <img src={window.location.origin + mosque} alt="Your Image" className="" />
            </div>
            <div className={"why-heading-text"}>
              <h4 className={"why-section-heading"}>Shariah Aligned</h4>
              <p className={"why-section-paragraph"}>
                We are leaders in Shariah Aligned Consumer Financing
              </p>
            </div>
          </div>
          <div className="d-lg-flex why-taleem-content">
            <div className="why-section-icon">
              <img src={window.location.origin + clock} alt="Your Image" className="" />
            </div>
            <div className={"why-heading-text"}>
              <h4 className={"why-section-heading"}>Easy & Quick Processing</h4>
              <p className={"why-section-paragraph"}>
                Our application process is simple and the complete process takes
                3-5 business days
              </p>
            </div>
          </div>
          <div className="d-lg-flex why-taleem-content">
            <div className="why-section-icon">
              <img src={window.location.origin + exam} alt="Your Image" className="" />
            </div>
            <div className={"why-heading-text"}>
              <h4 className={"why-section-heading"}>
                Customizable Plans According to Your Preferences
              </h4>
              <p className={"why-section-paragraph"}>
                You can choose the instalment plan that suits your needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row journey justify-content-center align-items-center text-center">
        <h3 className="journey-heading"> Our Journey So Far</h3>
        <div className="row justify-content-center gap-5">
          <div className="col-sm-1 col-4 our-journey-box">
            <h4 className="our-journey-box-heading"> 150+</h4>
            <h6 className="our-journey-box-sub-heading"> Students Served</h6>
          </div>
          <div className="col-sm-1 col-4 our-journey-box">
            <h4 className="our-journey-box-heading"> 15+</h4>
            <h6 className="our-journey-box-sub-heading"> Partners</h6>
          </div>
          <div className="col-sm-1 col-4 our-journey-box">
            <h4 className="our-journey-box-heading" style={{paddingTop: '30px'}}> 95%</h4>
            <h6 className="our-journey-box-sub-heading"> Customer Satisfaction Rate</h6>
          </div>
        </div>
      </div>
      {/* <TestimonialSlider/> */}
      <h2 className={'testimonials-heading'} style={{color: '#BC263A', fontWeight: 'bold'}}> Customer
        <span style={{color: '#20282B'}}> Reviews </span> </h2>
      <div className={'testimonials'}>
        <ItemsSlider>
        {testimonials.map((testimonial, index) => (
          <span key={index}>
            <Card
              className="border border-warning"
              style={{
                width: cardWidth,
                height: cardHeight,
                boxShadow: '0px 16px 32px rgba(51, 47, 76, 0.06)',
                borderRadius: '24px'
              }}
            >
              <CardContent>
                <div className="d-flex align-items-center gap-2">
                  <img
                    style={{ borderRadius: "5px" }}
                    src={testimonial.img}
                    // src={`https://via.placeholder.com/45x45?text=${testimonial.name}`}
                    alt={testimonial.name}
                    width={45}
                    height={45}
                  />
                  <div>
                    <Typography variant="h6" component="div">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle6" color="textSecondary">
                      {testimonial.jobTitle}
                    </Typography>
                  </div>
                </div>
                <Rating
                  name="read-only"
                  value={testimonial.rating}
                  readOnly
                  size="small"
                  className="mt-2"
                />
                <Typography variant="body2" color="textSecondary">
                  {testimonial.review}
                </Typography>
              </CardContent>
            </Card>
          </span>
        ))}
      </ItemsSlider> </div>
      <div className="row d-lg-flex faq-section">
        <div className="col-lg-6 col-sm-12 justify-content-center text-center align-items-center">
          <img
            src={window.location.origin + faq}
            className="faq-section-img justify-content-center align-items-center"
            alt={"faq-image"}
          />
        </div>
        <div className="col-lg-6 col-sm-12 faq-section-right">
          <h4 className="faq-section-heading"> FAQs</h4>
          <p className="faq-section-paragraph">
            Below is the list of questions that are frequently asked!
          </p>
          <div className="mt-4 mb-4">
            <div className="accordion" id="myAccordion">
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    type="button"
                    className="accordion-button accordion-heading"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    What is KalPay Taleem?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      KalPay Taleem enables students to split their educational expenses into monthly instalments. In partnership with Taleem Finance Company, we aim to eliminate financial barriers for more equitable quality education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    How are instalments divided?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      A down payment of anywhere between 25% - 60% is required and the remaining amount is divided into up to 6 monthly instalments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    How much time does it take to process the application?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Once the required documents are submitted, the initial decision will be communicated to the customer within 24 hours. The complete process for the application will be completed within 3-5 working days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    What are the documents required to apply for the instalment plan?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      The documents required are: <br />
                      1. Proof of Identity (CNIC front & back) <br />
                      2. Proof of Registration with the Educational Institute <br />
                      3. Proof of Financials (Bank Statement for the last 6 months, Salary Slip/Proof of Business) <br />
                      4. Proof of Residence <br />
                      5. Utility Bills (Electricity, Gas & Internet) <br />
                      6. Fee Voucher <br />

                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    How do I pay the down payment and the subsequent instalments?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      We allow payments through Bank Transfer, EasyPaisa, and JazzCash.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    Can my parent/guardian apply for a loan on my behalf?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Yes, a parent or guardian can also apply for a loan on your behalf.                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                  >
                    Can my family member be a guarantor?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      In the case that there is only one guarantor, then the guarantor must be a non-blood relation so family members cannot be a guarantor in this case.
                      But in case there are two guarantors one of them can be a blood relation, but the other guarantor must be a non-blood relation
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                  >
                    How does KalPay Taleem price its loans?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      KalPay is Shariah-aligned and charges no riba on its products. The customer pays a fixed profit percentage built into the total outstanding amount. This method of financing is Shariah-compliant. The fixed profit percentage varies according to the duration of the loan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                  >
                    Is there any other fee?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      No, the price revealed in your instalment plan is fixed & final, there are no other costs that need to be borne by the customer
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen1"
                  >
                    How much is the down payment?
                  </button>
                </h2>
                <div
                  id="collapseTen1"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      It is anywhere between 25% to 60% of your loan amount.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                  >
                    How can I apply for a Taleem loan?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      You can fill out the form on our website or email us at taleem@kalpayfinancials.com. Our team will reach out to you for a preliminary meeting, collect the documents, share the instalment plan and confirm your order!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                  >
                    Am I eligible to use KalPay?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      KalPay Taleem is currently operational in Lahore. If you are registered with an educational institute in Lahore, you can avail of our service. However, for educational institutes outside of Lahore you can Email or WhatsApp us on our official number to know whether we can assist you in financing your education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                  >
                    What happens in the scenario when a customer defaults?
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      The entire liability of the loan falls on the guarantor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    className="accordion-button accordion-heading collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThirteen"
                  >
                    Does KalPay Taleem take any collateral against the loan?
                  </button>
                </h2>
                <div
                  id="collapseThirteen"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      No hard collateral is taken against the loan. However, post-dated cheques are submitted by the customer as a form of security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
