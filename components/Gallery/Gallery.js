import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Brands from "../../data/elements/brands.json";
import "venobox/dist/venobox.min.css";

import GalleryData from "../../data/elements/gallery.json";

const Gallery = () => {
  const brands = Brands?.brandOne?.[0]?.brandLogo || []; // Ensure brandOne array and its first element are defined
  const firstBrandImg = brands[0]?.img; 
  console.log("brands",firstBrandImg)
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, []);
  return (
    <div className="row g-0 parent-gallery-container">
      {Brands &&
         brands?.map((data, index) => (
          <Link
            className="child-gallery-single col-lg-2 col-md-4 col-sm-6 col-6"
            key={index}
            href={`${data.img}`}
            data-gall="gallery01"
          >
            <div className="rbt-gallery">
              <Image
                className="w-100"
                src={data.img}
                width={200}
                height={100}
                alt="Gallery Images"
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Gallery;
