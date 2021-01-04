import React, { useState } from "react";
import Ticker from "react-ticker";
import styled from "styled-components";
import PageVisibility from "react-page-visibility";

export default function Tick(props) {
	const [pageIsVisible, setPageIsVisible] = useState(true);

	const handleVisibilityChange = (isVisible) => {
		setPageIsVisible(isVisible);
	};

	const speed = props.tickerSpeed ? props.tickerSpeed : 10;

	return (
		<TickerWrapper {...props}>
			<PageVisibility onChange={handleVisibilityChange}>
				{pageIsVisible && (
					<Ticker
						move={true}
						direction="toLeft"
						offset={props.offset}
						speed={speed}
					>
						{props.children}
					</Ticker>
				)}
			</PageVisibility>
		</TickerWrapper>
	);
}

const TickerWrapper = styled.div`
	.ticker {
		width: 100vw;
		transform: translate3d(-7vw, 0, 0);
		overflow: visible !important;
	}

	.ticker__element {
		display: inline-flex;
		flex-wrap: nowrap;
		width: min-content;
	}
`;
