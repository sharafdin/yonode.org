import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Yonode | The Node.js Toolkit for Rapid Development",
    description: "The Node.js Toolkit for Rapid Development",
    openGraph: {
      type: "website",
      url: "https://yonode.org",
      title: "Yonode",
      description: "The Node.js Toolkit for Rapid Development",
      siteName: "Yonode",
      images: [
        {
          url: "../public/yonode/yonode icon-02.png",
        },
      ],
    },
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [],
  },
  footer: {
    copyright: (
      <>
        Built by{" "}
        <Link href="https://twitter.com/isasharafdin">Mr Sharafdin</Link> with{" "}
        <Link href="https://saas-js.dev/">SASSJS</Link>
      </>
    ),
    links: [
      {
        href: "mailto:hello@yonode.org",
        label: "Contact",
      },
      {
        href: "https://twitter.com/isasharafdin",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/sharafdin/yonode",
        label: <FaGithub size="14" />,
      },
    ],
  },
};

export default siteConfig;
