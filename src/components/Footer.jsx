import React from 'react';
import footerLogo from '../../public/images/footer-logo.png'
function Footer(){
    return(
        <>
            <div className="row d-flex flex-column gap-2 justify-content-center text-center footer-reachout">
                <h2 className="footer-reachout-heading">Reach out to us!</h2>
                <p className="footer-reachout-text">
                    <a href="mailto:taleem@kalpayfinancials.com" className="text-decoration-none text-white"> taleem@kalpayfinancials.com </a>
                    <a href="tel:+923283044414" className="text-decoration-none text-white"><br/> 0328 3044414 </a></p>
            </div>
            <div className="row mb-5 footer d-flex">
                <div className="col-lg-4 col-12 d-flex flex-column gap-1 justify-content-center mx-lg-5 px-4 mt-2">
                    <img src={footerLogo} className="mb-4" width={150}/>
                    <h4 className="footer-heading">Consumer financing made easy!</h4>
                    <p className="footer-paragraph">Study Now Pay Later in easy, interest-free installments with KalPay!</p>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> Product</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <a> Semester Fees </a>
                            <a> Admission Tests </a>
                            <a> Professional Exams </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> About</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <a> Apply Now </a>
                            <a> Privacy Policy </a>
                            <a> We Are KalPay </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> Social Media</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <a> Facebook </a>
                            <a> Instagram </a>
                            <a> LinkedIn </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-separator mb-2"></div>
            <div className="row d-flex mb-2">
                <div className="col-lg-6 col-12">
                    <p className="footer-copyright">KalPay © 2023/ All Rights Reserved</p>
                </div>
                <div className="col-lg-6 col-12 d-lg-flex justify-content-lg-end">
                    <p className="footer-copyright">Powered by KalTech</p>
                </div>
            </div>
        </>
    );
}

export default Footer;