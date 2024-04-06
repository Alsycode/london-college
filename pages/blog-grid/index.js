import { useEffect, useState } from "react";
import sal from "sal.js";
import { Provider } from "react-redux";
import BlogData from "../../data/blog/blog.json";
import PageHead from "../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BlogGrid from "@/components/Blogs/BlogGrid";
import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import { useAppContext } from "@/context/Context";
import ContactForm from "@/components/Contacts/Contact-Form";
const BlogGridLayout = ({ updateData }) => {  
  const [data, setData ] = useState();

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Set initial data from getServerSideProps
    if (updateData) {
      setData(updateData);
    }
  }, [updateData]);

  let getAllBlogs = JSON.parse(JSON.stringify(BlogData.blogGrid));
 console.log("check",updateData)
  return (
    <>
      <PageHead title="Blog Grid - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <Banner col="col-lg-12" text="All Blog" getBlog={getAllBlogs} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGrid updateData={updateData} isPagination={true} top={true} start={0} end={8} />
            </div>
          </div>
<ContactForm/>
          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch("http://139.59.78.49:1337/api/london-collegeupdates?populate=*", {
      headers: {
        Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
      }
    });
    const data = await res.json();
    
    return {
      props: {
        updateData: data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        updateData: null
      }
    };
  }
}

export default BlogGridLayout;
