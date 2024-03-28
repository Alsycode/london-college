import React from "react";

const DeliveryandBenifits = ({ checkMatchCourses }) => {
  console.log("matchhhh", checkMatchCourses);

  return (
    <>
      <div className="col-lg-6">
        {checkMatchCourses?.map((item, index) => (
          <div key={index}>
            <div className="section-title">
              <h4 className="rbt-title-style-3 mb--20 mt--20">{item.title}</h4>
            </div>
            <ul className="rbt-list-style-1">
              {item.list.map((listItem, innerIndex) => (
                <li key={innerIndex}>
                  <i className="feather-check"></i>
                  {listItem.listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeliveryandBenifits;
