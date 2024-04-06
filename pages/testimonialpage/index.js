import Link from "next/link";
import { useEffect } from "react";
import sal from "sal.js";

import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import MobileMenu from "@/components/Header/MobileMenu";

import FooterOne from "@/components/Footer/Footer-One";
import Testimonial from "@/components/Testimonials/Testimonial";
import TestimonialTwo from "@/components/Testimonials/Testimonial-Two";
import TestimonialThree from "@/components/Testimonials/Testimonial-Three";
import TestimonialFour from "@/components/Testimonials/Testimonial-Four";
import TestimonialFive from "@/components/Testimonials/Testimonial-Five";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import TestimonialSeven from "@/components/Testimonials/Testimonial-Seven";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import BreadCrumb from "@/components/Common/BreadCrumb";
import BackToTop from "@/pages/backToTop";
import TestimonialModified from "@/components/modifiedtestimonial";
import ContactForm from "@/components/Contacts/Contact-Form";
const TestimonialPage = ({testimonialData}) => {
    const testdata =testimonialData;
    console.log("tesdata",testdata)
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <PageHead title="Testimonial - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Testimonial" text="Testimonial" />
          <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
          <TestimonialModified testimonialData={testimonialData}/>
          </div>
          <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
            {/* <Testimonial /> */}
          </div>
          {/* <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        EDUCATION FOR EVERYONE
                      </span>
                      <h2 className="title">
                        People like histudy education. <br /> No joking - here’s
                        the proof!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TestimonialTwo />
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gap">
            <TestimonialThree
              isStar={false}
              bgClass="bg-gray-light"
              subTitleBg="bg-primary-opacity"
              designation=""
            />
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
            <TestimonialFour />
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gapBottom">
            <TestimonialFive isDesc={true} />
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <h2 className="title">What Our Learners Say</h2>
                    <p className="description mt--20">
                      Learning communicate to global world and build a bright
                      future with our histudy.
                    </p>
                    <div className="veiw-more-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Marquee Y">Marquee Y</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <TestimonialSix />
              </div>
            </div>
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        EDUCATION FOR EVERYONE
                      </span>
                      <h2 className="title">
                        People like histudy education. <br /> No joking - here’s
                        the proof!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <TestimonialSeven />
            </div>
          </div> */}

          {/* <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
            <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
          </div> */}

          <MobileMenu />
          <ContactForm/>

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default TestimonialPage;


export async function getServerSideProps() {
    try {
      const res = await fetch("http://139.59.78.49:1337/api/london-college-testimonials?populate=*", {
        headers: {
          Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
        }
      });
      const data = await res.json();
      
      return {
        props: {
          testimonialData: data
        }
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          testimonialData: null
        }
      };
    }
  }
  