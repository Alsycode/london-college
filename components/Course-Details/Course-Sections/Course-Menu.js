import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const CourseMenu = () => {
  const [currentSection, setCurrentSection] = useState("overview");

  const sections = [
   
    // { id: "coursecontent", label: "Course Content" },
    { id: "About course", label: "About course" },
    { id: "Certificates & Affiliates", label: "Certificates & Affiliates" },

     {id: "Delivery & Benefit", label: "Delivery & Benefit "},
     {id: "Recruitment", label: "Recruitment"},
     {id: "About Industry", label: "About Industry"},
     {id: "Job role",label: "Job role"}
    
    
  ]

  useEffect(() => {
    const sectionIds = [
      
      // "coursecontent",
      "About course",
       "Delivery & Benefit",
      "Job role",
       "About Industry",
       "Certificates & Affiliates",
       "Recruitment"
     
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <nav className="mainmenu-nav onepagenav">
        <ul className="mainmenu">
          {sections.map((sec, i) => (
            <li className={currentSection === sec.id ? "current" : ""} key={i}>
              <ScrollLink
                to={sec.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                {sec.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CourseMenu;
