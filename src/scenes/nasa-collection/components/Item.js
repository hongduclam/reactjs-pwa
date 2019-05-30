import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ItemImage } from "./item/ItemImage";
import { ItemTotalInfo } from "./item/ItemInfo";
import { FlexDiv, Saperator } from "../../../components";
import { ThemeContext } from "./../scenes/item-list/NasaItemListPage";

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

ItemImage = styled.div`
	object-fit: contain;
	width: 100%;
	height: 200px;
	align-items: ${props => props.alignItems};
	${props => getImgStyle(props.isFullscreen)};
`;

S.ItemAction = styled(<FlexDiv justifyContent="flex-end" flex={`2`} />)``;

const ItemInfo = ({ imgUrl, title, totalViews, totalComments, totalLikes }) => {
	return (
		<S.ItemInfo>
			<ItemImage url={imgUrl} alt={title} />
			<FlexDiv alignItems="center">
				<FlexDiv justifyContent="flex-start" flex={`1`}>
					<IconAttach />
				</FlexDiv>
				<FlexDiv justifyContent="flex-end" flex={`2`}>
					<ItemTotalInfo icon={<IconView />} value={totalViews} />
					<Saperator />
					<ItemTotalInfo icon={<IconComment />} value={totalComments} />
					<Saperator />
					<ItemTotalInfo icon={<IconLike />} value={totalLikes} />
				</FlexDiv>
			</FlexDiv>
		</S.ItemInfo>
	);
};

export const Item = ({ itemInfo, userInfo }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const { handleToggleBackDrop } = useContext(ThemeContext);
	const handleImgClick = () => {
		handleToggleBackDrop();
		setIsFullscreen(!isFullscreen);
	};

	return (
		<S.Item>
			<ItemImage src={url} alt={`${alt}`} onClick={handleImgClick} />
			<S.ItemInfo />
			<S.ItemDescription title={``} description={``} />
			<S.ItemAction>
				
			</S.ItemAction>
		</S.Item>
	);
};

Item.defaultProps = {
	itemInfo: {},
	userInfo: {}
};

Item.propTypes = {
	itemInfo: PropTypes.shape({
		totalViews: PropTypes.number,
		totalComments: PropTypes.number,
		totalLikes: PropTypes.number,
		imgUrl: PropTypes.string,
		title: PropTypes.string
	}),
	userInfo: PropTypes.shape({
		avatarUrl: PropTypes.string,
		name: PropTypes.string
	})
};
