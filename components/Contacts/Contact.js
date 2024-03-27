import Link from "next/link";
import ContactData from "../../data/pages/contact.json";

const Contact = () => {
  return (
    <>
      <div className="row g-5">
        {ContactData &&
          ContactData.contactOne.map((data, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              key={index}
            >
              <div className="rbt-address">
                <div className="icon">
                  <i className={data.icon}></i>
                </div>
                <div className="inner">
                  <h4 className="title">{data.title}</h4>
                 
                    <p>
                      <Link href={data.numOne}>{data.numOne}</Link>
                    </p>
                 
                  
                  
                   
                 
                
                    <p>
                      <Link href={`mailto:${data.mailOne}`}>
                        {data.mailOne}
                      </Link>
                    </p>
                 
                    
                 
                  {data.address !== "" ? <p>{data.address}</p> : ""}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contact;
