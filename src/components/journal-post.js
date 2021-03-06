import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import { Wrapper } from './style/global-styles';
import MotionScroll from './motion-scroll';
import useSiteMetadata from './hooks/use-site-metadata';

function PostCover({ frontmatter, customCover }) {
  /**
   * Image Element
   */
  const isChildImageSharp = frontmatter?.cover?.childImageSharp;
  const imageSrc = isChildImageSharp
    ? frontmatter?.cover?.childImageSharp?.fluid
    : frontmatter?.cover?.publicURL;

  if (customCover) {
    return customCover;
  } else if (frontmatter.cover) {
    return (
      <PostImage style={{ backgroundImage: `url(${frontmatter.cover})` }}>
        {isChildImageSharp ? (
          <img
            sizes={imageSrc.sizes}
            srcSet={imageSrc.srcSet}
            alt={`${frontmatter.title} Cover Art`}
          />
        ) : (
          <img src={imageSrc} alt={`${frontmatter.title} Cover Art`} />
        )}
      </PostImage>
    );
  } else return null;
}

/**
 * JournalPost Component
 *
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.next
 * @param {Object} props.pageContext.previous
 * @param {Object} props.data
 * @param {Object} props.data.mdx
 * @param {Object} props.data.mdx.frontmatter
 * @param {Object} props.data.mdx.body
 * @param {Object} props.data.mdx.timeToRead
 * @param {Object} props.data.mdx.excerpt
 * @param {Object} props.customCover
 */

export default function JournalPost({
  pageContext: { next, previous },
  data: {
    mdx: { frontmatter, body, timeToRead, excerpt }
  },
  customCover
}) {
  const { meta } = useSiteMetadata();

  /**
   * Check if page has next or previous post
   */
  const hasNext = next?.frontmatter.template.includes('journal');
  const hasPrev = previous?.frontmatter.template.includes('journal');

  return (
    <>
      <Helmet
        meta={[
          // Open Graph / Facebook
          { property: 'og:type', content: 'website' },
          {
            property: 'og:title',
            content: `${frontmatter.title} / John Choura Design™`
          },
          { property: 'og:description', content: excerpt },
          {
            property: 'og:image',
            content: `${meta.siteUrl}${frontmatter?.cover?.publicURL}`
          },

          // Twitter
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:title',
            content: `${frontmatter.title} / John Choura Design™`
          },
          { property: 'twitter:description', content: excerpt },
          {
            property: 'twitter:image',
            content: `${meta.siteUrl}${frontmatter?.cover?.publicURL}`
          }
        ]}
      />
      <PostWrapper className="blog-post">
        <Wrapper>
          <PostHeader>
            <MotionScroll triggerPoint={0} yOffset={50}>
              <h2 className="display">{frontmatter.title}</h2>
            </MotionScroll>
          </PostHeader>
          <PostCover frontmatter={frontmatter} customCover={customCover} />
          <MotionScroll fadeIn triggerPoint={0.85} yOffset={50}>
            <PostCredit>
              <h4>
                by John Choura / {frontmatter.date} / {timeToRead} Minute Read
              </h4>
            </PostCredit>
          </MotionScroll>
          <MotionScroll fadeIn triggerPoint={0.85} yOffset={100} id="post">
            <ContentWrapper className="content-styles">
              <MDXRenderer>{body}</MDXRenderer>
            </ContentWrapper>
          </MotionScroll>
        </Wrapper>
      </PostWrapper>
      <PostSegue>
        {hasPrev ? (
          <SegueItem className="previous">
            <h6 className="no-underline">Newer Posts</h6>
            <Link to={previous.frontmatter.slug}>
              <h3>{previous.frontmatter.title}</h3>
            </Link>
          </SegueItem>
        ) : (
          <SegueItem className="previous none">
            <h6 className="no-underline">This is the newest post</h6>
          </SegueItem>
        )}
        {hasNext ? (
          <SegueItem className="next">
            <h6 className="no-underline">Older Posts</h6>
            <Link to={next.frontmatter.slug}>
              <h3>{next.frontmatter.title}</h3>
            </Link>
          </SegueItem>
        ) : (
          <SegueItem className="next none">
            <h6 className="no-underline">This is the oldest post</h6>
          </SegueItem>
        )}
      </PostSegue>
    </>
  );
}
const PostWrapper = styled.section`
  position: relative;
`;
const PostHeader = styled.div`
  margin: 10rem 0 10vw;
  height: fit-content;

  @media ${(props) => props.theme.device.laptop} {
    margin: 20vw 0 10vw;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin: 15vw 0 8vw;
  }
`;
const PostImage = styled.figure`
  width: 100vw;
  min-height: 300px;
  height: 45vw;
  transform: translateX(-1rem);
  background-color: white;
  margin: 3.5vw 0;
  overflow: hidden;

  @media ${(props) => props.theme.device.mobileLg} {
    transform: translateX(-7vw);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale3d(1.01, 1.01, 1.01);
    transition: transform ${(props) => props.theme.animation.duration[300].css};
  }
`;
const PostCredit = styled.div`
  margin: 2rem 0 3rem;

  @media ${(props) => props.theme.device.laptop} {
    margin: 3.5vw 0;
  }
`;
const PostSegue = styled(Wrapper)`
  display: flex;
  padding-top: 10.5vw;
  padding-bottom: 10.5vw;
  background-color: ${(props) => props.theme.colors.black};

  * {
    color: ${(props) => props.theme.colors.white};
  }
`;
const SegueItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 50%;

  h3 {
    @media ${(props) => props.theme.device.tablet} {
      max-width: 12em;
    }
  }

  &.none h6 {
    opacity: 0.5;
  }

  &.next {
    text-align: right;
    align-items: flex-end;

    h3 {
      padding-left: 0.5rem;
    }

    @media ${(props) => props.theme.device.tablet} {
      h3 {
        padding-left: 3rem;
      }
    }
  }

  &.previous {
    text-align: left;
    align-items: flex-start;

    h3 {
      padding-right: 0.5rem;
    }

    @media ${(props) => props.theme.device.tablet} {
      h3 {
        padding-right: 3rem;
      }
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  width: 100%;
  margin: 0 auto 7vw;

  @media ${(props) => props.theme.device.laptop} {
    width: 42rem;
    h1,
    h2,
    h3 {
      max-width: 85%;
    }
  }

  img,
  p img {
    max-width: 100%;
    width: 100%;
  }

  p {
    font-size: 1rem;
    letter-spacing: 0.01em;

    @media ${(props) => props.theme.device.laptop} {
      font-size: 1.25rem;
    }
  }

  .deckgo-highlight-code-carbon {
    box-shadow: none;
    font-size: 0.85rem;
    line-height: 1.45;
    font-weight: 400;

    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-header-padding: 8px 1rem;
    --deckgo-highlight-code-carbon-margin: 1.5rem 0;
    --deckgo-highlight-code-carbon-border-radius: 0.55rem;
    --deckgo-highlight-code-font-family: 'Roboto Mono', monospace;

    --deckgo-highlight-code-carbon-background: #212121;
    --deckgo-highlight-code-carbon-color: #f5815c;
    --deckgo-highlight-code-token-atrule: #82aaff;
    --deckgo-highlight-code-token-comment: ${(props) =>
      props.theme.colors.gray3};
    --deckgo-highlight-code-token-function: #f9c669;
    --deckgo-highlight-code-token-operator: #80cceb;
    --deckgo-highlight-code-token-property: #80cceb;
    --deckgo-highlight-code-token-punctuation: #80cceb;
    --deckgo-highlight-code-token-regex: #80cceb;
    --deckgo-highlight-code-token-selector: #c691e9;
  }
`;
