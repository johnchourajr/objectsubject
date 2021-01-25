import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { Wrapper } from "../components/style/global-styles";
import SectionHomeHero from "../components/section-home-hero";
import SectionHomeJournal from "../components/section-home-journal";
import SectionJobs from "../components/section-home-jobs";
import SectionBrands from "../components/section-home-brands";

export default function Template({
	data: {
		allMdx: { edges },
	},
}) {
	const { frontmatter } = edges[0].node;

	return (
		<Layout pageTitle={frontmatter.title}>
			<SectionHomeHero data={frontmatter} />
			<SectionJobs jobs={frontmatter.section_resume} />
			<SectionBrands brands={frontmatter.section_brands} />
			<Wrapper>
				<section>
					{frontmatter.section_art.headline}
					{frontmatter.section_art.img}
				</section>
			</Wrapper>
			<Wrapper>
				<section>
					<SectionHomeJournal />
				</section>
			</Wrapper>
		</Layout>
	);
}

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
						section_hero
						section_resume {
							date
							name
							title
						}
					}
				}
			}
		}
	}
`;
