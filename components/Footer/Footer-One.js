import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/londonlogo.png";

import CopyRight from "./CopyRight";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";
import SectionHead from "../../components/Button/ButtonProps/SectionHead"; // Import the SectionHead component

const FooterOne = ({ bgColor }) => {
  const [email, setEmail] = useState(""); // State to store the email input value

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state when input value changes
  };

  return (
    <>
      <footer
        className={`rbt-footer footer-style-1 ${
          bgColor ? bgColor : "bg-color-white"
        } overflow-hidden`}
      >
        <div className="footer-top">
          <div className="container">
            {FooterData &&
              FooterData.footerTwo.map((footer, index) => (
                <div className="row g-5" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <div className="logo">
                        <Link href="/">
                          <Image
                            src={logo}
                            width={90}
                            height={90}
                            alt="Edu-cause"
                          />
                        </Link>
                      </div>

                      <p className="description mt--20">{footer.description}</p>

                      <ul className="social-icon social-default justify-content-start">
                        {footer.socialLink.map((value, innerIndex) => (
                          <li key={innerIndex}>
                            <Link href={value.link}>
                              <i className={value.icon}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="contact-btn mt--30">
                        <Link
                          className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                          href="#"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Contact With Us</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <SingleFooter
                    classOne="col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
                    title="Useful Links"
                    footerType={footer.usefulLinks}
                  />

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h5 className="ft-title">Get Contact</h5>
                      <ul className="ft-link">
                        <li>
                          <span>Phone: </span>
                          <Link href="#">Call: +91 812999536</Link>
                        </li>
                        <li>
                          <span>E-mail:</span>{" "}
                          <Link href="mailto:hr@example.com">
                            counsellor@londoncollege.in
                          </Link>
                        </li>
                      </ul>

                      <form className="newsletter-form mt--20" action="#">
                        <h6 className="w-600">Newsletter</h6>
                        <p className="description">{footer.descriptionTwo}</p>

                        <div className="form-group right-icon icon-email mb--20">
                          {/* <label htmlFor="email">Enter Your Email Here</label> */}
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter Your Email Here"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>

                        <div className="row mt--50">
              <div className="col-lg-12">
                <div className="rbt-button-group">
                  <Link className="rbt-moderbt-btn" href="#"
                          >
                             <span className="moderbt-btn-text">Submit Button</span>
                            <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        
       

        <CopyRight />
      </footer>
    </>
  );
};

export default FooterOne;
