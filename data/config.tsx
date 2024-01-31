import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Yonode',
    description: 'The Node.js Toolkit for Rapid Development',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      // {
      //   href: 'https://docs.yonode.org',
      //   label: 'Get Started',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://twitter.com/isasharafdin">Mr Sharafdin</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:hello@yonode.org',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/yonode',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/sharafdin/yonode',
        label: <FaGithub size="14" />,
      },
    ],
  },
}

export default siteConfig
