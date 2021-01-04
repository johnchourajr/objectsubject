import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Logo from "../svg/logo";
import styled from "styled-components";

function NavLinkItem({
	data: {
		allMdx: { edges },
	},
}) {
	return (
		<>
			{edges.map(({ node: { frontmatter } }, i) => {
				if (frontmatter.slug === "/") {
					return (
						<Link key={i} to={frontmatter.slug} className="h5">
							/
						</Link>
					);
				} else {
					return (
						<Link key={i} to={frontmatter.slug} className="h5">
							/{frontmatter.title}
						</Link>
					);
				}
			})}
		</>
	);
}

function NavLinks() {
	return (
		<NavLinksWrapper>
			<StaticQuery
				query={graphql`
					query navQuery {
						allMdx(
							filter: {
								frontmatter: { type: { eq: "topLevelPage" } }
							}
							sort: { fields: frontmatter___weight, order: ASC }
						) {
							edges {
								node {
									id
									frontmatter {
										title
										type
										slug
										weight
									}
								}
							}
						}
					}
				`}
				render={(data) => <NavLinkItem data={data} />}
			/>
		</NavLinksWrapper>
	);
}

export default function Nav() {
	return (
		<NavWrapper>
			<Link to="/">
				<Logo />
			</Link>
			<NavLinks />
		</NavWrapper>
	);
}

const NavWrapper = styled.nav`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	height: 6rem;
	margin: 0 1rem;
	width: calc(100vw - 2rem);
	z-index: 10;

	@media ${(props) => props.theme.device.tablet} {
		margin: 0 auto;
		width: 86vw;
		height: 8rem;
	}
`;

const NavLinksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 75%;

	@media ${(props) => props.theme.device.tablet} {
		width: 50%;
	}

	a.h5 {
		margin: 0;
		color: ${(props) => props.theme.colors.black};
	}
`;
