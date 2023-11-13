/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
const admissionTest = '/images/admission-test-banner.png';
const gmat = '/images/gmat.png';
const gre = '/images/gre.png';
const ielts = '/images/ielts.png';
const sat = '/images/sat.png';
const pte = '/images/pte.png';
const logo = '/images/logo.png';
const whyTaleem = '/images/why-taleem.png';
const arrowIcon = '/images/arrow-Icon.png';
const clockIcon = '/images/clock-Icon.png';
import React, { useEffect } from 'react';
import DiscreteSlider from './common/Calculator.jsx';
const taleemGuide = '/images/taleem-customer-guide.pdf';


function AdmissionTests() {
    useEffect(() => {
        document.title = "Admission Tests"
    }, []);

    return (
        <>
            <div className="container-fluid hero-section-semester-fee pt-5">
                <div className="row">
                    <div className="col-md-6 hero-section-left">
                        {/* Left Column */}
                        <div className="d-flex flex-row justify-content-center justify-content-xl-start align-items-center align-items-lg-start">
                            <h1 className="hero-section-semester-fee-heading">Prepare Now
                                <span style={{ color: "#20282B" }}> Pay Later </span></h1>
                            {/*<h1 className="hero-section-pay-later-heading">Pay Later</h1>*/}
                        </div>
                        <div className="d-flex flex-column align-items-lg-start align-items-center">
                            <h4 className="hero-section-semester-fee-text">Dreaming of studying abroad but struggling to come up with the funds to cover the admission test fees?</h4>
                            <p className="hero-section-para">
                                Just focus on your preparation and use KalPay to split your exam fees into 6 equal monthly instalments. The facility covers a wide array of admission tests including but not limited to
                                <strong> GMAT, GRE, IELTS, Pearson PTE, SAT </strong> and more.
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
                            <img src={window.location.origin + admissionTest} alt="Your Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center bg-white pt-5">
                {/*<h3 className="continously-expanding-heading pt-5 pb-5"> Continuously Expanding Our Reach…….</h3>*/}
                <div className="row justify-content-center gap-2">
                    <Gallery />
                </div>
            </div>
            <div className='row d-lg-flex bg-white'>
                <div className='col-12 col-lg-6 why-image'>
                    <img src={window.location.origin + whyTaleem} alt="Your Image" className="img-fluid"/>
                </div>
                <div className='col-12 col-lg-6 why-section d-sm-flex-column'>
                    <h2 className={'why-choose'}>Why Choose</h2>
                    <h2 className={'why-taleem-admission'}>KalPay to Finance Your Admission Test Fee?</h2>
                    <div className='d-lg-flex why-taleem-content mb-4'>
                        <div className='why-section-icon'>
                            <img src={window.location.origin + arrowIcon} alt="Your Image" className="" />
                        </div>
                        <div className={'why-heading-text'}>
                            <h4 className={'why-section-heading'}>No exchange rate fluctuations</h4>
                            <p className={'why-section-paragraph'}>You don't have to worry about the exchange rate fluctuation as the instalment plan will be fixed in PKR based on the day the fee payment is made.</p>
                        </div>
                    </div>
                    <div className='d-lg-flex why-taleem-content mb-2'>
                        <div className='why-section-icon'>
                            <img src={window.location.origin + clockIcon} alt="Your Image" className="" />
                        </div>
                        <div className={'why-heading-text'}>
                            <h4 className={'why-section-heading'}>Quick Processing</h4>
                            <p className={'why-section-paragraph'}>We take no more than 3 business days to process all applications!</p>
                        </div>
                    </div>
                    <div className='d-lg-flex why-taleem-content mb-5'>
                        <div className='why-section-icon'>
                            <img src={window.location.origin + arrowIcon} alt="Your Image" className="" />
                        </div>
                        <div className={'why-heading-text'}>
                            <h4 className={'why-section-heading'}>Customizable Plans</h4>
                            <p className={'why-section-paragraph'}>Pick and choose however you’d like to pay back.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row loan-process-section-admission pt-5 mb-5">
                <div className="col-md-5 pt-5 justify-content-center d-flex flex-column loan-process-left-section">
                    <h3 className="loan-process-section-heading pt-5">Educational Inclusion
                        <span style={{ color: '#FFD844' }}> for Everyone! </span> </h3>
                    <p className="loan-process-section-paragraph">Providing educational instalments for various local and international tests.</p>
                </div>
                <div className="col-md-7 d-flex flex-column">
                    <h3 className="loan-process-heading mb-5 pt-5">Loan Process</h3>
                    <div className="bar-container">
                        <div className="bar"></div>
                    </div>
                    <div className="d-flex flex-row mb-4 gap-2 z-1">
                        <div className="step-number">
                            <h4>01</h4>
                        </div>
                        <div className="step-description pb-3">
                            <h6>Student applies through the website.</h6>
                            {/*<p>We are leaders in Shariah Aligned Consumer Financing</p>*/}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-4 gap-2 z-1">
                        <div className="step-number">
                            <h4>02</h4>
                        </div>
                        <div className="step-description pb-3">
                            <h6>Meeting is set up. Student submits the data.</h6>
                            {/*<p>We are leaders in Shariah Aligned Consumer Financing</p>*/}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-4 gap-2 z-1">
                        <div className="step-number">
                            <h4>03</h4>
                        </div>
                        <div className="step-description pb-3">
                            <h6>Loan Decision & Plan are shared.</h6>
                            {/*<p>We are leaders in Shariah Aligned Consumer Financing</p>*/}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-4 gap-2 z-1">
                        <div className="step-number">
                            <h4>04</h4>
                        </div>
                        <div className="step-description pb-3">
                            <h6>KalPay pays on behalf of the student!</h6>
                            {/*<p>We are leaders in Shariah Aligned Consumer Financing</p>*/}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="loan-process-section-headline">For more details about the process <span></span>
                        <a style={{color: '#bc263a'}} href={window.location.origin + taleemGuide} target={"_blank"} rel={"noopener noreferrer"}>click here </a></p>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center mb-5">
                <h3 className="loan-calculator-heading mb-5"> Loan Calculator </h3>
                <div className="loan-calculator-box">
                    <div className="text-center pt-5">
                        <img src={window.location.origin + logo} alt={'logo'} />
                    </div>

                    <div>
                        <DiscreteSlider />
                    </div>

                </div>
            </div>
        </>
    )
}
function Gallery() {
    // Replace these image URLs with your partner images
    const partnerImages = [
        gmat,
        gre,
        ielts,
        sat,
        pte
        // Add more image URLs as needed
    ].reverse();

    return (
        <div className="image-gallery gap-3">
            {partnerImages.map((image, index) => (
                <div key={index} className="image-gallery-item">
                    <img src={window.location.origin + image} alt={`Partner ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}
export default AdmissionTests;