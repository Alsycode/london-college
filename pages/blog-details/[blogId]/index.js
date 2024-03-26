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
      <PageHead title="Blog Details - Online Courses & Education NEXTJS14 Template" />
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

            <Instagram />
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
    const res = await fetch("http://localhost:1337/api/london-collegeupdates?populate[0]=para&populate[1]=Bannerimg1&populate[2]=Blockquote&populate[3]=Bannerimage2", {
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
export default SingleBlog;
