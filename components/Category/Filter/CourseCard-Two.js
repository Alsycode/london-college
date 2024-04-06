import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import { useAppContext } from "@/context/Context";

const CourseCardTwo = ({ course }) => {
  const { toggle } = useAppContext();
const courselog = course;
console.log("********",courselog)
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [course]);

  const truncateDescription = (description) => {
    // console.log("Original description:", description);
  
    if (!description) return ""; // Return empty string if description is null or undefined
  
    const words = description.split(" ");
    console.log("Number of words:", words.length);
  
    if (words.length > 35) {
      const truncatedDescription = words.slice(0, 35).join(" ") + " ...";
      // console.log("Truncated description:", truncatedDescription);
      return truncatedDescription;
    } else {
      console.log("No truncation needed");
      return description;
    }
  };
  

  return (
    <>
      <div
        className={`rbt-course-grid-column list-column-half ${
          toggle ? "active-list-view" : ""
        }`}
      >
        {course?.slice(0, 7)?.map((data, index) => (
          <div
            className="course-grid-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div
              className={`rbt-card variation-01 rbt-hover ${
                toggle ? "card-list-2" : ""
              }`}
            >
              <div className="rbt-card-img">
                <Link href={`/course-details-2/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={235}
                    height={330}
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <h4 className="rbt-card-title">
                  <Link href={`/course-details-2/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>
                {/* <span className="lesson-number">
                  {data.lesson} lessons
                  <span className="lesson-time ms-2">
                    ({data.days} hours total)
                  </span>
                </span> */}
                <p className="rbt-card-text">
                  {truncateDescription(data?.courseOverview[0]?.desc)}
                </p>
                <div className="rbt-card-bottom">
                  <Link
                    className="transparent-button"
                    href={`/course-details-2/${data.id}`}
                  >
                    Learn More
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCardTwo;
