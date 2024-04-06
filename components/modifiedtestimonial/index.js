import Image from "next/image";
import Link from "next/link";

import TestimonialData from "../../data/elements/testimonial.json";

const TestimonialModified = ({testimonialData}) => {
    const testttt = testimonialData;
    console.log("fffffffffffff", testttt)
  return (
    <>
      {testttt &&
        TestimonialData.testimonialFour.map((data, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-12 mb--60">
                {/* <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                </div> */}
              </div>
            </div>
            <div className="row g-8" >
              {testttt?.data?.map((item, innerIndex) => (
                <div className="col-lg-4 col-md-6 col-12" style={{marginBottom:"30px"}} key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item?.attributes?.image?.data?.attributes?.formats?.thumbnail.url}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item?.attributes?.name}</h5>
                          {/* <span>
                            {item.position} <i>{item.company}</i>
                          </span> */}
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.attributes?.Testimony}</p>
                        <div className="rating mt--20">
  {/* Render star icons dynamically based on the value of data?.attributes?.stars */}
  {Array.from({ length: item?.attributes?.stars }, (_, index) => (
    <Link href="#" key={index}>
      <i className="fa fa-star"></i>
    </Link>
  ))}
</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default TestimonialModified;
