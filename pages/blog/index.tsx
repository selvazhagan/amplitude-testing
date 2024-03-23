import { NextPageContext } from "next";
import Link from "next/link";
import Router from "next/router";

const Blog = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
  );
};

export const getInitialPropsIndex = () => async (ctx: NextPageContext) => {
  // Redirects
  if (ctx.req && ctx.res) {
    ctx.res.writeHead(302, { Location: "/blog/hello-world" });
    ctx.res.end();
    return {};
  } else {
    console.error("router replace");
    Router.replace("/blog/hello-world");
    return {};
  }
};

Blog.getInitialProps = getInitialPropsIndex();

export default Blog;
