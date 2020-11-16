import React, { useState, useEffect } from "react";
import Cover from "../components/Cover";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import loadingStyles from "../styles/Blog/loading.module.css";
import blogCardStyles from "../styles/Blog/card.module.css";
import Link from "next/link";
export default function blog() {
  //   items.map((obj) => {
  //     console.log(obj.fields.post.content[0].content[0].value);
  //     console.log(obj.fields.imageBanner.fields.file.url);
  //     console.log(obj.fields);
  //     return <div></div>;
  //   });

  const [postsReq, setPostsReq] = useState(null);
  useEffect(() => {
    axios.get("/api/getposts").then((i) => {
      const items = i.data.items;
      setPostsReq(items);
    });
  }, []);

  return (
    <div>
      <Cover image={"/Blog/Cover.png"} header={"Our Blog"} />
      {postsReq !== null ? (
        <div className={blogCardStyles.background}>
          <div className={blogCardStyles.gridContainer}>
            <div className={blogCardStyles.panelTwoContainer}>
              {postsReq.map((obj) => {
                return (
                  <div key={obj.sys.id} className={blogCardStyles.cardBody}>
                    <Link
                      className={blogCardStyles.link}
                      href={`/blog/${obj.fields.slug}`}
                    >
                      <div className={blogCardStyles.container}>
                        <div className={blogCardStyles.textContainer}>
                          <h3 className={blogCardStyles.title}>
                            {obj.fields.title}
                          </h3>
                          <div className={blogCardStyles.date}>
                            {obj.fields.datePosted}
                          </div>

                          <div className={blogCardStyles.paragraph}>
                            <p>
                              {
                                obj.fields.shortDescription.content[0]
                                  .content[0].value.replace(/^(.{50}[^\s]*).*/, "$1")
                              }
                            </p>
                          </div>
                        </div>
                        <div className={blogCardStyles.imageContainer}>
                          <img
                            src={
                              obj.fields.imageBanner.fields.file.url + "?w=700"
                            }
                            className={blogCardStyles.image}
                          />
                        </div>
                      </div>
                    </Link>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <LinearProgress />
          <div className={loadingStyles.container}>
            <Skeleton className={loadingStyles.root} />
            <Skeleton className={loadingStyles.root} />
            <Skeleton className={loadingStyles.root} />
            <Skeleton className={loadingStyles.root} />
            <Skeleton className={loadingStyles.root} />
            <Skeleton className={loadingStyles.root} />
          </div>
        </div>
      )}
    </div>
  );
}
