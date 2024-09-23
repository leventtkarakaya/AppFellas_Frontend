import React from "react";
import Navbar from "./Navbar";
import Content from "./Content/Content";
import Footer from "./Footer";
export default function Home() {
  /* Single Page App */
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
