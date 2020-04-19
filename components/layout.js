import Head from 'next/head';
import { useRouter } from 'next/router'

import Nav from '../components/nav';
import { site_title, site_url, site_description, site_image, verification_google, verification_yandex } from '../components/config'

export default function Layout({ title, children }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title ? title + ' | ' + site_title : site_title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="description" content={site_description}/>
        {/* */}
        <meta property="og:site_name" content={site_title}/>
        <meta property="og:url" content={site_url + router.pathname}/>
        <meta property="og:title" content={title ? title + ' | ' + site_title : site_title}/>
        <meta property="og:description" content={site_description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={site_image}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:url" content={site_url + router.pathname}/>
        <meta name="twitter:title" content={title ? title + ' | ' + site_title : site_title}/>
        <meta name="twitter:description" content={site_description}/>
        <meta name="twitter:image" content={site_image}/>
        <meta name="twitter:image:alt" content={site_title}/>
        <meta name="application-name" content={title ? title + ' | ' + site_title : site_title}/>
        <meta name="apple-mobile-web-app-title" content={title ? title + ' | ' + site_title : site_title}/>
        <meta name="google-site-verification" content={verification_google}/>
        <meta name="yandex-verification" content={verification_yandex}/>
        {/* */}
        <link href={site_url + router.pathname} rel="canonical"/>
        <link href="/favicon.svg" rel="shortcut icon"/>
      </Head>
      <Nav/>
      <main className="page-container">
        {children}
      </main>
      <style jsx>{`
      .page-container{margin-left: 65px;}
      @media (max-width: 768px){
        .page-container{margin-left: 0px;}
      }
      `}</style>
    </>
  )
}