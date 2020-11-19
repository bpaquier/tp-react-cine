import React from "react";
import Head from "next/head";

export default function Layout({ ...props }) {
  return (
    <div>
      <Head>
        <title>{props.title || "ALLO BARBYLONE"}</title>
        <meta name="title" content="ALLO BARBYLONE" />
        <meta
          name="description"
          content="AlloBarbylone, the reference website for cinema and tv series! Discover or search for movie ratings, the budget your favorite series etc ..."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="ALLO BARBYLONE" />
        <meta
          property="og:description"
          content="AlloBarbylone, the reference website for cinema and tv series! Discover or search for movie ratings, the budget your favorite series etc ..."
        />
        <meta property="og:image" content="/assets/meta-img.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="ALLO BARBYLONE" />
        <meta
          property="twitter:description"
          content="AlloBarbylone, the reference website for cinema and tv series! Discover or search for movie ratings, the budget your favorite series etc ..."
        />
        <meta property="twitter:image" content="/assets/meta-img.jpg"></meta>
      </Head>
      {props.children}
    </div>
  );
}
