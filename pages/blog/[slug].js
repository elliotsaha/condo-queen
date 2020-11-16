import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function blogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.post("/api/slugpost", { slug: slug }).then((i) => {
      setData(i.data);
    });
  }, []);

  return <div></div>;
}
