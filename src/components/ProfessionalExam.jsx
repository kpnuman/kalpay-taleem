/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
const professionalExam = '/images/professional-exam.png';
const soa = '/images/soa.png';
const ca = '/images/ca.png';
const acca = '/images/acca.png';
const cfa = '/images/cfa.png';
const logo = '/images/logo.png';
const whyTaleem = '/images/why-taleem.png';
const arrowIcon = '/images/arrow-Icon.png';
const clockIcon = '/images/clock-Icon.png';
import React, { useEffect } from 'react';
import DiscreteSlider from './common/Calculator.jsx';
import MySlider from './common/RangeSlider';
const data = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
const secondSliderData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ProfessionalExam() {
    useEffect(() => {
        document.title = "Professional Exams";
    }, []);

    return (
        <>
            <div className="container-fluid hero-section-semester-fee pt-5">
                <div className="row">
                    <div className="col-md-6 hero-section-left">
                        {/* Left Column */}
                        <div className="d-flex flex-column pt-5 align-items-lg-start align-items-center">
                            <h4 className="hero-section-semester-fee-text">Are you looking to further your career with a professional certification or accreditation but struggling to come up with the funds to cover the exam fees?</h4>
                            <p className="hero-section-para">
                                Our finance options allow you to spread the cost of your professional exam fees over a series of easy installments,
                                making it more affordable and accessible for you to invest in your career development.
                                Our financing options are available for a range of professional exams,
                                including <strong> ACCA, CA, CFA, Actuary Exams </strong> and many others.
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
                            <img src={window.location.origin + professionalExam} alt="Your Image" className="img-fluid" />
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
                    <p className="loan-process-section-paragraph">Providing educational instalments for various local and international institutions</p>
                </div>
                <div className="col-md-7 d-flex flex-column">
                    <h3 className="loan-process-heading mb-5 pt-5">Loan Process</h3>
                    <div className="bar-container">
                        <div className="bar"></div>
                    </div>
                    <div className="d-flex flex-row mb-2 gap-2 z-1">
                        <div className="step-number">
                            <h4>01</h4>
                        </div>
                        <div className="step-description">
                            <h6>Student applies through the website.</h6>
                            <p>We are leaders in Shariah Aligned Consumer Financing</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-2 gap-2 z-1">
                        <div className="step-number">
                            <h4>02</h4>
                        </div>
                        <div className="step-description">
                            <h6>Meeting is set up. Student submits the data.</h6>
                            <p>We are leaders in Shariah Aligned Consumer Financing</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-2 gap-2 z-1">
                        <div className="step-number">
                            <h4>03</h4>
                        </div>
                        <div className="step-description">
                            <h6>Loan Decision & Plan are shared.</h6>
                            <p>We are leaders in Shariah Aligned Consumer Financing</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-2 gap-2 z-1">
                        <div className="step-number">
                            <h4>04</h4>
                        </div>
                        <div className="step-description">
                            <h6>KalPay pays on behalf of the student!</h6>
                            <p>We are leaders in Shariah Aligned Consumer Financing</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="loan-process-section-headline">For more details about the process click here</p>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center mb-5">
                <h3 className="loan-calculator-heading mb-5"> Loan Calculator </h3>
                <div className="loan-calculator-box">
                    <div className="text-center pt-5">
                        <img src={window.location.origin + logo} />
                    </div>
                    {/*<div>*/}
                    {/*    <p className="pt-5 step-description text-start px-5"> Start adding your details to see instalments pricing!</p>*/}
                    {/*    <input className="text-start price-input" type="text" placeholder="Price *" required={true} />*/}
                    {/*</div>*/}
                    {/*<div className="mb-3">*/}
                    {/*    <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Downpayment %</p>*/}
                    {/*    <MySlider data={data} step={5} min={25} max={70} />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <p style={{paddingLeft:'3rem'}}> Total number of Instalments</p>*/}
                    {/*    <MySlider data={secondSliderData} step={1} min={1} max={12} />*/}
                    {/*</div>*/}
                    <div>
                        <DiscreteSlider />
                    </div>
                    {/*<div>*/}
                    {/*    <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Downpayment %</p>*/}
                    {/*    <DiscreteSlider data={data} step={5} min={25} max={70} defaultValue={25}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Total number of Instalments</p>*/}
                    {/*    <DiscreteSlider data={secondSliderData} step={1} min={1} max={12} defaultValue={1} instalment={true} />*/}
                    {/*</div>*/}
                    {/*<div className="d-flex justify-content-center align-items-center mt-4">*/}
                    {/*    <button className="btn btn-text w-50" style={{borderRadius:"10px", height:"50px"}}>*/}
                    {/*        Calculate*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}
function Gallery() {
    // Replace these image URLs with your partner images
    const partnerImages = [
        soa,
        ca,
        acca,
        cfa
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
export default ProfessionalExam;