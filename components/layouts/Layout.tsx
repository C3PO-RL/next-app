import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Rances" />
        <meta name="description" content={`Pokemon info ${title}`} />
        <meta name="keywords" content={`Pokemon info ${title}`} />
        <meta property="og:title" content={`information about ${title}`} />
        <meta
          property="og:description"
          content={`this is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}img/banner.png`} />
      </Head>
      <Navbar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
