"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Providers from "../providers";
import FloatingNavbar from "../navbar/floating-navbar";

const StandardLayout: React.FC<
  React.PropsWithChildren<{
    navbarProps?: { transparent: boolean };
  }>
> = ({ children }) => {
  return (
    <div className="root">
      <div
        id="layout-mid-container"
        className=" relative flex flex-1 overflow-clip"
      >
        <div
          id="layout-desktop-content-container"
          className="flex w-full flex-1 flex-col"
        >
          <Providers>
            <Navbar />
            <FloatingNavbar />
            <div>{children}</div>
            <Footer />
          </Providers>
        </div>
      </div>
    </div>
  );
};

export default StandardLayout;
