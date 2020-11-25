import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cover from "../../components/Cover";
import styles from "../../styles/Blog/sub.module.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createStyles, makeStyles } from "@material-ui/core/styles";

function BlogPost() {
  const router = useRouter();
  const [imageBanner, setImageBanner] = useState();
  const [header, setHeader] = useState();
  const [post, setPost] = useState();

  axios.post("/api/slugpost", { slug: router.query.slug }).then((i) => {
    if (i.data.includes === undefined) {
      setImageBanner("/defaultBackground.png");
      setHeader("...");
    } else {
      setImageBanner(i.data.includes.Asset[0].fields.file.url);
      setHeader(i.data.items[0].fields.title);
    }
  });

  axios.post("/api/slugpost", { slug: router.query.slug }).then((i) => {
    if (i.data.items[0] === undefined) {
      setPost("...");
    } else {
      setPost(i.data.items[0].fields.post);
    }
  });

  return (
    <div className={styles.main}>
      <Cover image={imageBanner} header={header} />
      <div className={styles.root}>
        <div
          dangerouslySetInnerHTML={{ __html: documentToHtmlString(post) }}
          className={styles.inner}
        />
      </div>
    </div>
  );
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
