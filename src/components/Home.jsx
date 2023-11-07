/* eslint-disable no-undef */
import { useEffect } from "react";
const heroImage = "/images/hero-image.png";
const paymentIcon = "/images/Icon-payment.png";
const admissionIcon = "/images/Icon-admission.png";
const examIcon = "/images/Icon-exams.png";
const kicksoft = "/images/kicksoft.png";
const lums = "/images/lums.png";
const lums2 = "/images/lums-2.png";
const smart = "/images/smart.png";
const rs = "/images/rs.png";
const mapped = "/images/mapped.png";
const dversity = "/images/dversity.png";
const whyTaleem = "/images/why-taleem.png";
const mosque = "/images/mosque.png";
const clock = "/images/clock-Icon.png";
const exam = "/images/examIcon.png";
const faq = "/images/faq.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
// import TestimonialSlider from './TestimonialSlider';
import ItemsSlider from "./ItemSlider";
import { CardContent, Rating, Typography } from "@mui/material";
const testimonials = [
  {
    name: "Ryan Azhar",
    jobTitle: "Student",
    review: "“ Very comfortable in learning and directed, this is better than school “",
    rating: 5,
  },
  {
    name: "Ayesha Amjad",
    jobTitle: "Student",
    review:"“ Easy access and explanations of learning materials that are easy to understand “",
    rating: 5,
  },
  {
    name: "Ayesha Amjad",
    jobTitle: "Student",
    review: "“ Children become more active in studying and can manage their own time ”",
    rating: 5,
  },
  {
    name: "Ayesha Amjad",
    jobTitle: "Student",
    review: "“ Children become more active in studying and can manage their own time ”",
    rating: 5,
  },
  {
    name: "Ayesha Amjad",
    jobTitle: "Student",
    review: "“ Children become more active in studying and can manage their own time ”",
    rating: 5,
  },
];
const cardWidth = 280; 
const cardHeight = 200; 


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
                interest-free monthly instalments, including examination fees,
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
              instalments
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
              TOEFL or PTE exam in up to 6 equal monthly installments
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
              Actuary and many other exams in up to 6 equal monthly installments
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
        <div className="row justify-content-center">
          <Gallery />
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
              <h4 className={"why-section-heading"}>Shariah Compliant</h4>
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
                You can choose the installment plan that suits your needs
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
            <h4 className="our-journey-box-heading"> 25M+</h4>
            <h6 className="our-journey-box-sub-heading"> Loans Distributed</h6>
          </div>
          <div className="col-sm-1 col-4 our-journey-box">
            <h4 className="our-journey-box-heading"> 25M+</h4>
            <h6 className="our-journey-box-sub-heading"> Loans Distributed</h6>
          </div>
        </div>
      </div>
      {/* <TestimonialSlider/> */}
      <ItemsSlider>
        {testimonials.map((testimonial, index) => (
          <span key={index}>
            <Card
              className="border border-warning rounded"
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <CardContent>
                <div className="d-flex align-items-center gap-2">
                  <img
                    style={{ borderRadius: "5px" }}
                    src={`https://via.placeholder.com/45x45?text=${testimonial.name}`}
                    alt={testimonial.name}
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
      </ItemsSlider>
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem.
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
                    What services does your Herbvest provide?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
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
                    What services does your Herbvest provide?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
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
                    What services does your Herbvest provide?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravid
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
                    What services does your Herbvest provide?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse accordion-section-content"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
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

function Gallery() {
  // Replace these image URLs with your partner images
  const partnerImages = [
    kicksoft,
    lums,
    lums2,
    smart,
    rs,
    mapped,
    dversity,
    // Add more image URLs as needed
  ];

  return (
    <div className="image-gallery">
      {partnerImages.map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img src={window.location.origin + image} alt={`Partner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
