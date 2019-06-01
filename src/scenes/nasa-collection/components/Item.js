import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexDiv, Text } from "../../../components";
import { ThemeContext } from "../..";

const S = {};
S.Item = styled.div`
	width: 18.75em;
	flex-basis: calc(25% - 1em);
	position: relative;
	box-sizing: border-box;
	margin: 0.5em;

	@media (max-width: 62em) {
		flex-basis: calc(33.33% - 1em);
		p {
			font-size: 0.5em;
		}
	}

	@media (max-width: 30em) {
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
	}
`;

S.ItemInfo = styled(FlexDiv)`
	background-color: white;
	p:first-child {
		padding-right: 1em;
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

export const Item = ({ imgThumbUrl, dateCreated, creator, title, description, actionComponent }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const { handleToggleBackDrop } = useContext(ThemeContext);
	const handleImgClick = () => {
		handleToggleBackDrop(!isFullscreen);
		setIsFullscreen(!isFullscreen);
	};

	return (
		<S.Item>
			<S.ItemImage isFullscreen={isFullscreen}>
				<img src={imgThumbUrl} alt={`${title}`} onClick={handleImgClick} />
			</S.ItemImage>
			<S.ItemInfo>
				<Text variant="small" color="#000000">
					{creator}
				</Text>
				<Text variant="small" color="#000000">
					{dateCreated}
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
	imgThumbUrl: "",
	dateCreated: "",
	creator: "",
	title: "",
	actionComponent: null
};

Item.propTypes = {
	imgThumbUrl: PropTypes.string,
	dateCreated: PropTypes.string,
	creator: PropTypes.string,
	title: PropTypes.string,
	actionComponent: PropTypes.element
};
