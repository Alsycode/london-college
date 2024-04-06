import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import Admissionform from "@/components/admission.js";
import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Apply Now for Enrollment!


                    </span>
                    <h2 className="title">
                    Unlock Your Future with Us <br /> 
                    </h2>
                  </div>
                </div>
              </div>
              {/* <Contact /> */}
            </div>
          </div>

          <Admissionform />

          {/* <div className="rbt-google-map bg-color-white rbt-section-gapTop">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8054316500397!2d76.32349407450882!3d10.032908772468666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b1cf47bc41d%3A0xe5a66b4a652615b9!2sLondon%20College!5e0!3m2!1sen!2sin!4v1711517169630!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div> */}

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
