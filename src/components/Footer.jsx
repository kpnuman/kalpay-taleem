const footerLogo = '/images/footer-logo.png'
import { Link } from 'react-router-dom';
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
                    <Link to={'/'}>
                        <img src={window.location.origin + footerLogo} className="mb-4" width={150} alt={'logo'}/>
                    </Link>
                    <h4 className="footer-heading">Consumer financing made easy!</h4>
                    <p className="footer-paragraph">Study Now Pay Later in easy, interest-free instalments with KalPay!</p>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> Product</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <Link to={'/semester-fee'}> Semester Fees </Link>
                            <Link to={'/admission-tests'}> Admission Tests </Link>
                            <Link to={'/professional-exams'}> Professional Exams </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> About</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <a style={{textDecoration: 'none', color:'#20282B'}} rel={"noreferrer"} href={"https://docs.google.com/forms/d/e/1FAIpQLScRu-aQshc3C-W0uhmIoBB4MmLzUOUmAMjZV5JIYDJVhgx_OQ/viewform"} target={"_blank"}>
                                Apply Now </a>
                            <a style={{textDecoration: 'none', color:'#20282B'}} rel={"noreferrer"} href={"https://bnpl.kalpayfinancials.com/privacy.html"} target={"_blank"}>
                            Privacy Policy </a>
                            <a style={{textDecoration: 'none', color:'#20282B'}} rel={"noreferrer"} href={"https://kalpayfinancials.com/about-us.html"} target={"_blank"}> We Are KalPay </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-12 mt-5 px-4 mx-lg-0">
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="footer-menu-heading"> Social Media</h2>
                        <div className="footer-menu mt-2 d-flex flex-column">
                            <a style={{textDecoration: 'none', color:'#20282B'}} href="https://www.facebook.com/kalpayfinancials" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a style={{textDecoration: 'none', color:'#20282B'}} href="https://instagram.com/kal.pay" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a style={{textDecoration: 'none', color:'#20282B'}} href="https://www.linkedin.com/in/kalpay/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
                    <p className="footer-copyright">
                        <a href="https://kaltech.online/" target={"_blank"} style={{textDecoration: 'none', color:'#20282B'}} rel="noreferrer">
                        Powered by KalTech
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;