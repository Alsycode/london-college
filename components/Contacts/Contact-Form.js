import Image from "next/image";
import Link from "next/link";
import img from "../../public/images/about/contact.jpg";
import SectionHead from "../../components/Button/ButtonProps/SectionHead"; // Import the SectionHead component
const ContactForm = ({ gap }) => {
  return (
    <>
      <div className={`rbt-contact-address ${gap}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <Image
                  className="w-100 radius-6"
                  src={img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                {/* <h3 className="title">
                  Get a Free Course You Can Contact With Me
                </h3> */}
                <form
                  id="contact-form"
                  method="POST"
                  action="mail.php"
                  className="rainbow-dynamic-form max-width-auto"
                >
                  <div className="form-group">
                    <input
                      name="contact-name"
                      id="contact-name"
                      type="text"
                      placeholder="Name"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="contact-phone"
                      type="email"
                      placeholder="Email"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Your Subject"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      placeholder="Message"
                    ></textarea>
                    <span className="focus-border"></span>
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
        </div>
      </div>
    </>
  );
};

export default ContactForm;
