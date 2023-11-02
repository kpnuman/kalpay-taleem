import books from '../../public/images/books.png';
import React, { useState } from 'react';
import kicksoft from '../../public/images/kicksoft.png';
import lums from '../../public/images/lums.png';
import lums2 from '../../public/images/lums-2.png';
import smart from '../../public/images/smart.png';
import rs from '../../public/images/rs.png';
import mapped from '../../public/images/mapped.png';
import dversity from '../../public/images/dversity.png';
import logo from '../../public/images/logo.png';

function SemesterFee(){
    return (
        <>
            <div className="container-fluid hero-section-semester-fee pt-5">
                <div className="row">
                    <div className="col-md-6 hero-section-left">
                        {/* Left Column */}
                        <div className="d-flex flex-row justify-content-center align-items-start">
                            <h1 className="hero-section-semester-fee-heading">Learn Now
                            <span style={{color:"#20282B"}}> Pay Later </span></h1>
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
                        <span style={{color:'#FFD844'}}> for Everyone! </span> </h3>
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
            {/*<div className="d-flex justify-content-center flex-column align-items-center mb-5">*/}
            {/*    <h3 className="loan-calculator-heading"> Loan Calculator </h3>*/}
            {/*    <div className="loan-calculator-box">*/}
            {/*        <div className="text-center pt-5">*/}
            {/*            <img src={logo} />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <p className="pt-5 step-description text-start px-5"> Start adding your details to see instalments pricing!</p>*/}
            {/*            <input className="text-start price-input" type="text" placeholder="Price *" required={true} />*/}
            {/*        </div>*/}
            {/*        /!*<MySlider />*!/*/}
            {/*        /!*<div className="slider">*!/*/}
            {/*        /!*    <input type="range" min="25" max="70" value="25" id="fader" step="5" list="volsettings" />*!/*/}
            {/*        /!*    <datalist id="volsettings">*!/*/}
            {/*        /!*        <option>25</option>*!/*/}
            {/*        /!*        <option>30</option>*!/*/}
            {/*        /!*        <option>35</option>*!/*/}
            {/*        /!*        <option>40</option>*!/*/}
            {/*        /!*        <option>45</option>*!/*/}
            {/*        /!*        <option>50</option>*!/*/}
            {/*        /!*        <option>55</option>*!/*/}
            {/*        /!*        <option>60</option>*!/*/}
            {/*        /!*        <option>65</option>*!/*/}
            {/*        /!*        <option>70</option>*!/*/}
            {/*        /!*    </datalist>*!/*/}
            {/*        /!*</div>*!/*/}

            {/*    </div>*/}
            {/*</div>*/}
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

function MySlider() {
    const [sliderValue, setSliderValue] = useState(25);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <input
                type="range"
                min="25"
                max="70"
                value={sliderValue}
                id="fader"
                step="5"
                list="volsettings"
                onChange={handleSliderChange}
                className="custom-slider"
            />
            <datalist id="volsettings">
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
            </datalist>
            <div className="breakpoint-labels">
                <span>25</span>
                <span>30</span>
                <span>35</span>
                <span>40</span>
                <span>45</span>
                <span>50</span>
                <span>55</span>
                <span>60</span>
                <span>65</span>
                <span>70</span>
            </div>
        </div>
    );
}
export default SemesterFee;