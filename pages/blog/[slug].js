import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cover from "../../components/Cover";
export default function blogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);
  axios.post("/api/slugpost", { slug: slug });
  return <div>{/* <Cover image={} header={data.items} /> */}</div>;
}
