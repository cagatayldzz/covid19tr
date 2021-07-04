import React from "react";
import App from "next/app";
import NProgress from "../lib/nprogress";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";

class CApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
        <NProgress />
      </React.Fragment>
    );
  }
}

export default CApp;
