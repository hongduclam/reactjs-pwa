import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	filterItems as filterItemsAction,
	errorSelector,
	listItemsSelector,
	updateFavouriteItem,
	getItem,
	deleteItem,
	itemDetailSelector
} from "../../services/nasa-collection";
import {
	FlexDiv,
	FavouriteIcon,
	TrashIcon,
	EditIcon,
	PlusIcon,
	PrimaryButton,
	ActionButton,
	FavouriteActiveIcon
} from "../../components";

import { Item } from "./components/Item";
import AddOrEditItemModal from "./components/AddOrEditItemModal";

const S = {};

S.ListItemPage = styled.div`
	margin: 4em 2em;
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
const limit = 20;

class ListItemPage extends React.PureComponent {
	page = 0;
	filterParams = {
		page: { index: -1, size: 20 },
		sortBy: { title: "asc", date: "desc" },
		searchBy: { title: "", date: "", favorite: "" }
	};
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		document.addEventListener("scroll", this.handleLoadMore, false);
		this.filterItems();
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleLoadMore, false);
	}

	handleLoadMore = () => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			this.filterItems();
		}
	};

	handleEditItem = itemId => {
		this.props.getItem(itemId);
		this.setState({
			open: true
		});
	};

	handleDeleteItem = itemId => {
		this.props.deleteItem(itemId);
	};

	handleFavouriteItem = itemId => {
		this.props.updateFavouriteItem(itemId);
	};

	filterItems = () => {
		this.filterParams.page.index = this.filterParams.page.index + 1;
		this.props.filterItems(this.filterParams);
	};

	render() {
		const { items, itemData } = this.props;
		const { open } = this.state;
		return (
			<S.ListItemPage>
				<S.ListItemHeader>
					<Title>{`NASA Collection`}</Title>
					<NavLink to="/add">
						<PrimaryButton>
							<PlusIcon />
							{`Add new item`}
						</PrimaryButton>
					</NavLink>
				</S.ListItemHeader>
				<ListItemContent>
					{items.map((item, index) => (
						<Item
							{...item}
							key={`item-key-${item.id}-${index}`}
							actionComponent={
								<ItemAction
									isFavourite={item.isFavourite}
									handleEdit={this.handleEditItem}
									handleDelete={this.handleDeleteItem}
									handleFavourite={this.handleFavouriteItem}
								/>
							}
						/>
					))}
				</ListItemContent>
				<AddOrEditItemModal itemData={itemData} actionType="edit" open={open} handleClose={this.handleCloseModal} />
			</S.ListItemPage>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		filterItems: payload => {
			dispatch(filterItemsAction(payload));
		},
		updateFavouriteItem: itemId => {
			dispatch(updateFavouriteItem(itemId));
		},
		deleteItem: itemId => {
			dispatch(deleteItem(itemId));
		},
		getItem: itemId => {
			dispatch(getItem(itemId));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	items: listItemsSelector,
	itemData: itemDetailSelector,
	error: errorSelector
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
