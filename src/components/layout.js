import React from 'react';

/**
 * Local Components
 */
import Head from './globals/head';
import Nav from './globals/nav';
import Footer from './globals/footer';

/**
 * Local styles
 */
import { PageWrapper } from './style/global-styles';
import './style/fonts.css';

/**
 * Code Highlighting styles
 */
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import useSiteMetadata from './hooks/use-site-metadata';
deckDeckGoHighlightElement();

/**
 * Layout Component
 *
 * @param {Object} props
 * @param {any} props.children
 * @param {Object} props.pageContext
 */
export default function Layout({ children, pageContext }) {
  const { meta, og } = useSiteMetadata();

  console.log(meta, og);

  return (
    <>
      <Head pageContext={pageContext} />
      <PageWrapper>
        <Nav pageContext={pageContext} />
        <main id="main">{children}</main>
      </PageWrapper>
      <Footer pageContext={pageContext} />
    </>
  );
}
