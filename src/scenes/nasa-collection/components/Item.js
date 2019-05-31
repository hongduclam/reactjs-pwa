import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexDiv, Text } from "../../../components";
import { ThemeContext } from "../..";

const S = {};
S.Item = styled.div`
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

S.ItemInfo = styled.div`
	background-color: white;
	padding: 0.5em;
`;

S.ItemDescription = styled.div``;

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

const ItemImage = styled.div`
	object-fit: contain;
	width: 100%;
	height: 200px;
	align-items: ${props => props.alignItems};
	${props => getImgStyle(props.isFullscreen)};
`;

S.ItemAction = styled(() => <FlexDiv justifyContent="flex-start" />)``;

export const Item = ({ imgThumbUrl, dateCreated, creator, title, description, actionComponent }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const { handleToggleBackDrop } = useContext(ThemeContext);
	const handleImgClick = () => {
		handleToggleBackDrop();
		setIsFullscreen(!isFullscreen);
	};

	return (
		<S.Item>
			<ItemImage src={imgThumbUrl} alt={`${title}`} onClick={handleImgClick} />
			<S.ItemInfo>
				<Text variant="small">{creator}</Text>
				<Text variant="small">{dateCreated}</Text>
			</S.ItemInfo>
			<S.ItemDescription>
				<Text variant={`title`}>{title}</Text>
				<Text variant={`normal`}>{description}</Text>
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
