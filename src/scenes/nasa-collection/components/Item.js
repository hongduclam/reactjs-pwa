import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexDiv, Text } from "../../../components";
import { ThemeContext } from "../..";

const S = {};
S.Item = styled.div`
	width: 13.75em;
	flex-basis: calc(25% - 1em);
	position: relative;
	box-sizing: border-box;
	margin: 0.5em;
	&:hover {
		-webkit-box-shadow: 2px 0px 5px 8px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 2px 0px 5px 8px rgba(0, 0, 0, 0.75);
		box-shadow: 2px 0px 5px 8px rgba(0, 0, 0, 0.75);
	}

	@media (max-width: 62em) {
		width: 12.75em;
		flex-basis: calc(33.33% - 1em);
		p {
			font-size: 0.5em;
		}
	}

	@media (max-width: 30em) {
		width: 7.75em;
		flex-basis: calc(50% - 1em);
		p {
			font-size: 0.5em;
		}
	}

	/* Iphone 5 */
	@media (max-width: 320px) {
		flex-basis: calc(50% - 0.7em);
		p {
			font-size: 0.5em;
		}
		margin: 0.2em;
		width: 6.75em;
	}
`;

S.ItemInfo = styled(FlexDiv)`
	background-color: white;
	justify-content: space-between;
	p:first-child {
		padding-right: 1em;
		width: 50%;
	}
	> p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	margin: 0.5em 0;
`;

S.ItemDescription = styled.div`
	> h2 {
		font-size: 24px;
		font-weight: 400;
		letter-spacing: -0.58px;
		line-height: 29px;
		margin: 0.5em 0;
		height: 58px;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
	}
	p {
		height: ${60}px;
		display: block; /* Fallback for non-webkit */
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		max-width: 400px;
		margin: 0 auto;
		font-size: 14px;
		line-height: 1.4;

		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const getImgStyle = isFullscreen => {
	if (isFullscreen) {
		return `cursor: zoom-out;
    margin: auto;
    z-index: 101;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto; height: 100%; transition: all .1s ease-out; max-width: 90%`;
	}
	return `cursor: zoom-in; z-index: 10;`;
};

S.ItemImage = styled.div`
	> img {
		border-radius: 3px;
		object-fit: contain;
		width: 100%;
		height: 168px;
		align-items: ${props => props.alignItems};
		${props => getImgStyle(props.isFullscreen)};
	}
`;

S.ItemAction = styled(FlexDiv)`
	justify-content: flex-start;
	margin: 0.5em 0;
`;

export const Item = ({ previewImgLink, dateCreated, creator, title, description, actionComponent }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const { handleToggleBackDrop } = useContext(ThemeContext);
	const handleImgClick = () => {
		handleToggleBackDrop(!isFullscreen);
		setIsFullscreen(!isFullscreen);
	};
	const formatDate = new Date(dateCreated).toDateString();
	return (
		<S.Item>
			<S.ItemImage isFullscreen={isFullscreen}>
				<img src={previewImgLink} alt={`${title}`} onClick={handleImgClick} />
			</S.ItemImage>
			<S.ItemInfo>
				<Text variant="small" color="#000000">
					{creator}
				</Text>
				<Text variant="small" color="#000000">
					{formatDate}
				</Text>
			</S.ItemInfo>
			<S.ItemDescription>
				<Text variant={`title`} color="#000000">
					{title}
				</Text>
				<Text variant={`normal`} color="#000000">
					{description}
				</Text>
			</S.ItemDescription>
			{actionComponent && <S.ItemAction>{actionComponent}</S.ItemAction>}
		</S.Item>
	);
};

Item.defaultProps = {
	previewImgLink: "",
	dateCreated: "",
	creator: "",
	title: "",
	actionComponent: null
};

Item.propTypes = {
	previewImgLink: PropTypes.string,
	dateCreated: PropTypes.string,
	creator: PropTypes.string,
	title: PropTypes.string,
	actionComponent: PropTypes.element
};
