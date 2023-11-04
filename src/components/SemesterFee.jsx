/* eslint-disable no-unused-vars */
import books from '../../public/images/books.png';
import { useState } from 'react';
import kicksoft from '../../public/images/kicksoft.png';
import lums from '../../public/images/lums.png';
import lums2 from '../../public/images/lums-2.png';
import smart from '../../public/images/smart.png';
import rs from '../../public/images/rs.png';
import mapped from '../../public/images/mapped.png';
import dversity from '../../public/images/dversity.png';
import logo from '../../public/images/logo.png';
import MySlider from './common/RangeSlider';
const data = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
const secondSliderData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function SemesterFee() {
    return (
        <>
            <div className="container-fluid hero-section-semester-fee pt-5">
                <div className="row">
                    <div className="col-md-6 hero-section-left">
                        {/* Left Column */}
                        <div className="d-flex flex-row justify-content-center align-items-start">
                            <h1 className="hero-section-semester-fee-heading">Learn Now
                                <span style={{ color: "#20282B" }}> Pay Later </span></h1>
                            {/*<h1 className="hero-section-pay-later-heading">Pay Later</h1>*/}
                        </div>
                        <div className="d-flex flex-column">
                            <h4 className="hero-section-semester-fee-text">KalPay Taleem is Pakistan’s first Shariah-aligned Learn Now Pay Later service enabling hassle-free access to education for everyone!</h4>
                            <p className="hero-section-para">
                                In collaboration with Taleem Finance Company Ltd., KalPay is providing students the facility to pay for their educational expenses in easy monthly installments, making education accessible and more affordable.
                            </p>
                            <button className="btn">
                                <a href="#" className="btn-text">
                                    Apply Now
                                </a>
                            </button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        {/* Right Column */}
                        <div className="d-flex justify-content-center align-items-center hero-img">
                            <img src={books} alt="Your Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center loan-process-section pt-5">
                <h3 className="continously-expanding-heading pt-5 pb-5"> Continuously Expanding Our Reach…….</h3>
                <div className="row justify-content-center gap-2">
                    <Gallery />
                    <Gallery />
                </div>
            </div>
            <div className="row loan-process-section pt-5 mb-5">
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
                        <img src={logo} />
                    </div>
                    <div>
                        <p className="pt-5 step-description text-start px-5"> Start adding your details to see instalments pricing!</p>
                        <input className="text-start price-input" type="text" placeholder="Price *" required={true} />
                    </div>
                    <div className="mb-3">
                        <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Downpayment %</p>
                        <MySlider data={data} step={5} min={25} max={70} />
                    </div>
                    <div>
                        <p style={{paddingLeft:'3rem'}}> Total number of Instalments</p>
                        <MySlider data={secondSliderData} step={1} min={1} max={12} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <button className="btn btn-text w-50" style={{borderRadius:"10px", height:"50px"}}>
                                Calculate
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
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
        dversity
        // Add more image URLs as needed
    ];

    return (
        <div className="image-gallery">
            {partnerImages.map((image, index) => (
                <div key={index} className="image-gallery-item">
                    <img src={image} alt={`Partner ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}
export default SemesterFee;