import React, { useEffect } from "react";
import { useRouter } from "next/router";

import BlogData from "../../../data/blog/blog.json";
import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
import Instagram from "@/components/Instagram/Instagram";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";

const SingleBlog = ({updateData}) => {
  const router = useRouter();
  const postId = parseInt(router.query.blogId);
  let blogPosts;

  if (postId <= 14) {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogList));
  } else {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogGrid));
  }

  const matchedBlog = updateData?.data?.find((post) => post.id === postId);
console.log("matchedupdate",matchedBlog)
  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/blog-list");
    }
  }, [matchedBlog, router]);

  return (
    <>
      {/* <PageHead title="Blog Details - Online Courses & Education NEXTJS14 Template" /> */}
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-overlay-page-wrapper">
            {/* <BlogBreadCrumb matchedBlog={matchedBlog} /> */}

            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
                  matchedBlog={matchedBlog !== undefined ? matchedBlog : ""}
                  updateData={updateData}
                /> 
                <div className="related-post pt--60">
                  <div className="section-title text-start mb--40">
                    <span className="subtitle bg-primary-opacity">
                      Related Post
                    </span>
                    <h4 className="title">Similar Post</h4>
                  </div>
                   <BlogListItems
                    selectedBlogs={BlogData.blogList}
                    updateData={updateData}
                    start={1}
                    end={4}
                  /> 
                </div>
              </div>
            </div>

            {/* <Instagram /> */}
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
    const res = await fetch("http://139.59.78.49:1337/api/london-collegeupdates?populate[0]=para&populate[1]=Bannerimg1&populate[2]=Blockquote&populate[3]=Bannerimage2", {
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
export default SingleBlog;
