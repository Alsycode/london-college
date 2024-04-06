import Image from "next/image";
import Link from "next/link";

import Brands from "../../data/elements/brands.json";

const BrandOne = () => {
  return (
    <>
      {Brands &&
        Brands.brandOne.map((data, index) => (
          <div className="row align-items-center g-5" key={index}>
            <div className="col-lg-3">
              <div className="brand-content-left">
                <h4 className="mb--0">{data.title}</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="brand-list brand-style-2 justify-content-center justify-content-lg-between">
                {data.brandLogo.map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <Link href="#">
                      <div className="responsive-image-container">
                        <Image
                          src={item.img}
                          width={160}
                          height={160}
                          alt="Brand Image"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default BrandOne;
