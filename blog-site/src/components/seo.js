import * as React from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import PropTypes from "prop-types";

const SEO = ({ pageTitle, pageDescription, imgPath, topPage }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(query);
  const {
    siteName,
    siteSubTitle,
    siteDescription,
    siteUrl,
    siteOgpImage,
    siteAuthor,
  } = site.siteMetadata;

  const seo = {
    title: pageTitle ? `${pageTitle} | ${siteName}` : `${siteName} | ${siteSubTitle}`,
    description: pageDescription || siteDescription,
    image: `${siteUrl}${imgPath || siteOgpImage}`,
    url: pathname ? `${siteUrl}${pathname}` : `${siteUrl}`,
    pageType: topPage ? "website" : "article",
  };

  return (
    <Helmet>
      <html lang="ja-JP" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={siteAuthor} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:locale" content="ja-JP" />
      {<meta property="og:site_name" content={siteName} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.pageType && <meta property="og:type" content={seo.pageType} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
};

export default SEO;

const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        siteSubTitle
        siteDescription
        siteUrl
        siteOgpImage
        siteAuthor
      }
    }
  }
`;

SEO.defaultProps = {
  pageTitle: null,
  pageDescription: null,
  imgPath: null,
  topPage: false,
};

SEO.propTypes = {
  siteName: PropTypes.string,
  siteSubTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteUrl: PropTypes.string,
  siteOgpImage: PropTypes.string,
  siteAuthor: PropTypes.string,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  imgPath: PropTypes.string,
  topPage: PropTypes.bool,
};