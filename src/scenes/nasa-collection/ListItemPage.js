import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	filterItems as filterItemsAction,
	errorSelector,
	updateFavouriteItem,
	deleteItem,
	openModal,
	filteredItemsSelector,
	filterParamsSelector,
	changeFilterParam
} from "../../services/nasa-collection";

import {
	FlexDiv,
	FavouriteIcon,
	TrashIcon,
	EditIcon,
	PlusIcon,
	PrimaryButton,
	ActionButton,
	FavouriteActiveIcon,
	Input,
	Select,
} from "../../components";

import { Item } from "./components/Item";
import { ACTION_TYPE } from "../../constants";

const S = {};

S.ListItemPage = styled.div`
	margin: 2em 2em;
	background-color: #ffffff;
	a {
		text-decoration: none;
	}
`;

export const ListItemContent = styled(FlexDiv)`
	flex-flow: row wrap;
	justify-content: flex-start;
	box-sizing: border-box;
`;

S.ListItemHeader = styled(FlexDiv)`
	justify-content: space-between;
	align-items: center;
`;

S.FilterContent = styled(FlexDiv)`
	> div {
		margin: 0.5em;
	}
`;

S.ItemAction = styled(FlexDiv)`
	justify-content: space-between;
	width: 10em;
`;

const Title = styled.h1`
	color: #000000;
	font-size: 50px;
	font-weight: 700;
	letter-spacing: -1.21px;
	line-height: 60px;
	opacity: 0.30327;
	text-align: left;
`;

const ItemAction = ({ isFavourite, handleEdit, handleFavourite, handleDelete }) => {
	return (
		<S.ItemAction>
			<ActionButton onClick={handleFavourite}>{isFavourite ? <FavouriteActiveIcon /> : <FavouriteIcon />}</ActionButton>
			<ActionButton onClick={handleDelete}>
				<TrashIcon />
			</ActionButton>
			<ActionButton onClick={handleEdit}>
				<EditIcon />
			</ActionButton>
		</S.ItemAction>
	);
};

ItemAction.defaultProps = {
	isFavourite: false,
	handleEdit: React.noop,
	handleFavourite: React.noop,
	handleDelete: React.noop
};

class ListItemPage extends React.PureComponent {
	componentDidMount() {
		document.addEventListener("scroll", this.handleLoadMore, false);
		this.filterItems();
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleLoadMore, false);
	}

	handleLoadMore = () => {
		// if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
		// 	this.filterItems();
		// }
	};

	handleEditItem = itemData => event => {
		this.props.openModal({
			actionType: ACTION_TYPE.EDIT,
			selectedItem: itemData
		});
	};

	handleDeleteItem = ({ itemId }) => event => {
		this.props.deleteItem(itemId);
		this.filterItems();
	};

	handleFavouriteItem = ({ itemId }) => event => {
		this.props.updateFavouriteItem(itemId);
		this.filterItems();
	};

	filterItems = () => {
		this.props.filterItems(this.props.filterParams);
	};

	handleControlChange = ({ currentTarget: { name, value } }) => {
		const param = {
			...this.props.filterParams,
			[name]: value,
		};
		this.props.updateFilterParam(param);
		this.props.filterItems(param);
	};

	render() {
		const {
			items,
			filterParams: { searchByTitle, searchByFavourite, sortBy }
		} = this.props;

		return (
			<S.ListItemPage>
				<S.ListItemHeader>
					<Title>{`NASA Collection`}</Title>
					<NavLink to="/add">
						<PrimaryButton>
							<PlusIcon />
							<span>{`Add new item`}</span>
						</PrimaryButton>
					</NavLink>
				</S.ListItemHeader>
				<S.FilterContent>
					<Input
						onChange={this.handleControlChange}
						label={`Search by title`}
						name="searchByTitle"
						value={searchByTitle}
					/>
					<Select
						onChange={this.handleControlChange}
						label={`Is favourite`}
						name="searchByFavourite"
						value={searchByFavourite}
						options={[{ text: "Yes", value: true }, { text: "No", value: false }]}
					/>

					<Select
						onChange={this.handleControlChange}
						label={`Sort by`}
						name="sortBy"
						value={sortBy}
						options={[{ text: "Title", value: "title" }, { text: "Date", value: "dateCreated" }]}
					/>
				</S.FilterContent>
				<ListItemContent>
					{items.map((item, index) => (
						<Item
							{...item}
							key={`item-key-${item.id}-${index}`}
							actionComponent={
								<ItemAction
									isFavourite={item.isFavourite}
									handleEdit={this.handleEditItem(item)}
									handleDelete={this.handleDeleteItem(item)}
									handleFavourite={this.handleFavouriteItem(item)}
								/>
							}
						/>
					))}
				</ListItemContent>
			</S.ListItemPage>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		filterItems: payload => {
			dispatch(filterItemsAction(payload));
		},
		updateFilterParam: payload => {
			dispatch(changeFilterParam(payload));
		},
		updateFavouriteItem: itemId => {
			dispatch(updateFavouriteItem(itemId));
		},
		deleteItem: itemId => {
			dispatch(deleteItem(itemId));
		},
		openModal: payload => {
			dispatch(openModal(payload));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	items: filteredItemsSelector,
	error: errorSelector,
	filterParams: filterParamsSelector
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItemPage);

ListItemPage.defaultProps = {
	isFetching: false,
	items: [],
	error: null,
	filterItems: () => {}
};

ListItemPage.propTypes = {
	isFetching: PropTypes.bool,
	listItems: PropTypes.array,
	error: PropTypes.string,
	filterItems: PropTypes.func
};
