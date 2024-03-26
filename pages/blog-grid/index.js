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
              <BlogGrid updateData={updateData} isPagination={true} top={true} start={0} end={6} />
            </div>
          </div>
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
    const res = await fetch("http://localhost:1337/api/london-collegeupdates?populate=*", {
      headers: {
        Authorization: "Bearer 36d91d755f6933406f808c6bf39e61dfc5f91f83192d27953c1408254968d8370a23e758ffaa7a7aeefdebb91c21a8d6b7eb8dd771d427e6ee01f7e42e831681d35e263fc04f9209e5e02b6d5473a7899c896a983904eac92709ec1bb86fc2b726314bb0cebb7cfec92e46cd284328bf1a21e17736509a74b2ced35db5ef0265"
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
