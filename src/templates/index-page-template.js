import React from 'react';
import { graphql } from 'gatsby';

/**
 * Local Components
 */
import { Wrapper } from '../components/style/global-styles';
import SectionHomeHero from '../components/section-home-hero';
import SectionHomeJournal from '../components/section-home-journal';
import SectionJobs from '../components/section-home-jobs';
import SectionBrands from '../components/section-home-brands';
import HoverBuddy from '../components/hover-buddy';

/**
 * index-page-template
 *
 * @param {Object} props
 * @param {Object} props.data
 * @param {Object} props.data.allMdx
 * @param {Object} props.data.allMdx.edges
 */
export default function Template({
  data: {
    allMdx: { edges }
  }
}) {
  /**
   * Destructure date
   */
  const { frontmatter } = edges[0].node;

  return (
    <>
      <SectionHomeHero data={frontmatter} triggerPoint={0} />
      <SectionJobs jobs={frontmatter.section_resume} />
      <SectionBrands brands={frontmatter.section_brands} />
      <Wrapper>
        <section>
          {frontmatter.section_art.headline}
          {frontmatter.section_art.img}
        </section>
      </Wrapper>
      <SectionHomeJournal />
      <HoverBuddy />
    </>
  );
}

/**
 * indexQuery
 */
export const indexQuery = graphql`
  query indexQuery {
    allMdx(
      filter: {
        frontmatter: { title: { eq: "Home" }, type: { eq: "topLevelPage" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            section_art {
              headline
              img
            }
            section_brands {
              name
              url
            }
            section_hero {
              title
              figma_id
              foreground
              background
            }
            section_resume {
              date
              title
              role
              url
              foreground
              background
              image
            }
          }
        }
      }
    }
  }
`;
