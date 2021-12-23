import axios from "axios";
import React from "react";

import { useEffect } from "react";
import LatestPosts from "../components/LatestPosts";
import NavBar from "../components/NavBar";

export default function Home({ posts }) {
  return (
    <>
      <h1>{posts[0].attributes.title}</h1>
      <LatestPosts posts={posts}/>
     
    </>
  );
}

export async function getStaticProps() {
  let response = await fetch("http://localhost:1337/api/posts/");
  let data_array = await response.json();
  console.log(data_array.data);
  return {
    props: {
      posts: data_array.data,
    },
  };
}
