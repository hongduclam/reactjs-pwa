import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

import { Button, BackIcon, Text, ActionButton, PlusIcon } from "../../components";
import { ListItemContent } from "./ListItemPage";
import { Item } from "./components/Item";
import {
	searchItem,
	searchedItemsSelector,
	openModal,
	loadingSelector,
	searchQuerySelector,
	searchQueryChange,
	resultMessageSelector
} from "../../services/nasa-collection";
import { createStructuredSelector } from "reselect";

import { ACTION_TYPE } from "../../constants";
import { debounce } from "../../services/layout";

const S = {};

S.AddItemPage = styled.div`
	margin: 4em 2em;
	background-color: #ffffff;
	a {
		text-decoration: none;
	}
`;
S.Header = styled.div``;
S.SearchContent = styled.div`
	padding: 1em 0;
`;
S.ResultContent = styled.div``;
const BackButton = styled(Button)`
	background-color: transparent;
	color: #784cc0;
	border: none;
	cursor: pointer;
	g {
		fill: #784cc0;
	}
	svg {
		padding-right: 0.5em;
	}
`;
S.Title = styled(Text)`
	color: #000000;
	font-family: Helvetica;
	font-size: 40px;
	font-weight: 400;
	letter-spacing: -0.96px;
	line-height: 48px;
	opacity: 0.75;
	text-align: left;
	padding: 0.8em 0;
`;

S.ResultMessage = styled(Text)`
	color: #000000;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0.09px;
	line-height: 14px;
	text-align: left;
`;

const SearchInput = styled.input`
	border: 1px solid #ceced2;
	border-radius: 3px;
	width: calc(100% - 2em);
	height: 62px;
	font-size: 1.6em;
	padding: 0 1em;
	::placeholder {
		opacity: 0.7999999999999999;
		color: #ceced2;
		font-family: Helvetica;
	}
`;

const AddButton = styled(ActionButton)`
	justify-content: space-between;
	color: #d3d3d3;
	opacity: 1;
	background-color: ${props => (props.disabled ? "#CECED2" : "white")};
	width: 100%;
	g {
		fill: #ceced2;
	}
	svg {
		padding-left: 0.5em;
	}
	span {
		padding-right: 12%;
		width: 70%;
		color: ${props => (props.disabled ? "black" : "#CECED2")};
	}
`;

const ItemAction = ({ isAdded, handleClick }) => {
	return (
		<AddButton onClick={handleClick} disabled={isAdded}>
			<PlusIcon />
			<span>{isAdded ? `Added to NASA collection` : `Add to NASA collection`}</span>
		</AddButton>
	);
};

class AddItemPage extends PureComponent {
	componentDidMount() {
		this.handleSearchItem();
	}

	handleInputChange = ({ currentTarget: { value } }) => {
		this.props.handleSearchQueryChange(value);
	};

	handleSearchItem = debounce(e => {
		const { searchQuery } = this.props;
		if (searchQuery) {
			this.props.searchItem(searchQuery);
		}
	}, 1000);

	handleAddItem = itemData => event => {
		if (!itemData.isAdded) {
			this.props.openModal({
				selectedItem: { ...itemData },
				actionType: ACTION_TYPE.ADD
			});
		}
	};

	handleKeyUp = event => {
		if (event.keyCode === 13) {
			this.handleSearchItem();
		}
	};

	render() {
		const { searchedItems, isFetching, searchQuery, resultMessage } = this.props;
		return (
			<BlockUi tag="div" blocking={isFetching}>
				<S.AddItemPage>
					<S.Header>
						<NavLink to={`/`}>
							<BackButton>
								<BackIcon />
								{`Back to collection`}
							</BackButton>
						</NavLink>
					</S.Header>
					<S.SearchContent>
						<S.Title>{`Search from Nasa`}</S.Title>
						<SearchInput
							placeholder={`Type something to search...`}
							value={searchQuery}
							onChange={this.handleInputChange}
							onKeyUp={this.handleSearchItem}
						/>
					</S.SearchContent>
					<S.ResultContent>
						{resultMessage && <S.ResultMessage> {resultMessage}</S.ResultMessage>}
						<ListItemContent>
							{searchedItems.map((item, index) => (
								<Item
									{...item}
									key={`item-key-${item.id}-${index}`}
									actionComponent={<ItemAction isAdded={item.isAdded} handleClick={this.handleAddItem(item)} />}
								/>
							))}
						</ListItemContent>
					</S.ResultContent>
				</S.AddItemPage>
			</BlockUi>
		);
	}
}

AddItemPage.propTypes = {};
AddItemPage.defaultProps = {
	searchedItems: []
};

export const mapDispatchToProps = dispatch => {
	return {
		openModal: payload => {
			dispatch(openModal(payload));
		},
		searchItem: q => {
			dispatch(searchItem.start(q));
		},
		handleSearchQueryChange: value => {
			dispatch(searchQueryChange(value));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	searchedItems: searchedItemsSelector,
	isFetching: loadingSelector,
	searchQuery: searchQuerySelector,
	resultMessage: resultMessageSelector
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddItemPage);
