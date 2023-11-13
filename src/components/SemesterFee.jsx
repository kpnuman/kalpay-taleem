/* eslint-disable no-unused-vars */
import Gallery from './common/Gallery.jsx';

const books = '/images/books.png';
const logo = '/images/logo.png';
import DiscreteSlider from './common/Calculator.jsx';
import React, { useEffect } from 'react';
const taleemGuide = '/images/taleem-customer-guide.pdf';

function SemesterFee() {
    useEffect(() => {
        document.title = "Semester Fee"
    }, []);

    return (
        <>
            <div className="container-fluid hero-section-semester-fee pt-5">
                <div className="row">
                    <div className="col-md-6 hero-section-left">
                        {/* Left Column */}
                        <div className="d-flex flex-row justify-content-center  align-items-center align-items-lg-start">
                            <h1 className="hero-section-semester-fee-heading">Learn Now
                                <span style={{ color: "#20282B" }}> Pay Later </span></h1>
                            {/*<h1 className="hero-section-pay-later-heading">Pay Later</h1>*/}
                        </div>
                        <div className="d-flex flex-column align-items-lg-start align-items-center">
                            <h4 className="hero-section-semester-fee-text">KalPay Taleem is Pakistan’s first Shariah-aligned Learn Now Pay Later service enabling hassle-free access to education for everyone!</h4>
                            <p className="hero-section-para">
                                In collaboration with Taleem Finance Company Ltd, KalPay is providing students the facility to pay for their educational expenses in easy monthly instalments, making education accessible and more affordable.
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
                            <img src={window.location.origin + books} alt="Your Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center loan-process-section pt-5">
                <h3 className="continously-expanding-heading pt-5 pb-5"> Continuously Expanding Our Reach…….</h3>
                <div className="px-5">
                    <div className="px-5">
                        <Gallery />
                    </div>
                </div>
            </div>

            <div className="row loan-process-section pt-5 mb-5">
                <div className="col-md-5 pt-5 justify-content-center d-flex flex-column loan-process-left-section">
                    <h3 className="loan-process-section-heading pt-5">Educational Inclusion
                        <span style={{ color: '#FFD844' }}> for Everyone! </span> </h3>
                    <p className="loan-process-section-paragraph">Providing educational instalments for various local and international institutions.</p>
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
export default SemesterFee;