import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cover from "../../components/Cover";

function BlogPost() {
  const router = useRouter();
  axios
    .post("/api/slugpost", { slug: router.query.slug })
    .then((i) => console.log(i))
    .catch((i) => console.log(i));
  return <main></main>;
}

export default BlogPost;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/blog/first-post",
      // Object variant:
      { params: { slug: "second-post" } },
    ],
    fallback: true,
  };
}
