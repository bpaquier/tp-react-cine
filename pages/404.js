import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout/index";
import classNames from "classnames/bind";

import css from "./404.styles.module.scss";

const cx = classNames.bind(css);

export default function Custom404() {
  return (
    <Layout title="Barbylone 404">
      <main className={cx(css.container)}>
        <h1>OOPS 😅</h1>
        <p>Looks like this page does not exist</p>
        <Link href="/">GO TO HOMEPAGE</Link>
      </main>
    </Layout>
  );
}
