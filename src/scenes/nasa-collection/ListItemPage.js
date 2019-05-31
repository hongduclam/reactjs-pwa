import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";

import { filterItems as filterItemsAction, errorSelector, listItemsSelector } from "../../services/nasa-collection";
import { connect } from "react-redux";
import { FlexDiv, Button, Text, FavouriteIcon, TrashIcon, EditIcon, PlusIcon } from "../../components";
import { Item } from "./components/Item";

const S = {};

S.ListItemPage = styled.div`
	margin: 0 auto;
`;

S.ListItemContent = styled(FlexDiv)`
	flex-flow: row wrap;
	justify-content: flex-start;
	box-sizing: border-box;
`;

S.ListItemHeader = styled(() => <FlexDiv justifyContent={`space-between`} />)``;

S.ItemAction = styled(() => <FlexDiv justifyContent={`space-between`} />)`
	width: 90%;
`;

const AddButton = styled(Button)`
	color: purple;
`;

const Title = styled(() => <Text variant="title" />)`
	font-size: 3rem;
`;

const ItemAction = ({ isFavourite, handleEdit, handleFavourite, handleDelete }) => {
	return (
		<S.ItemAction>
			<Button onClick={handleFavourite}>
				<FavouriteIcon color={isFavourite ? "red" : "grey"} />
			</Button>
			<Button onClick={handleDelete}>
				<TrashIcon />
			</Button>
			<Button onClick={handleEdit}>
				<EditIcon />
			</Button>
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

export class ListItemPage extends React.PureComponent {
	page = 0;
	constructor(props) {
		super(props);
		this.state = {};
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

	handleEditItem = itemId => {};
	handleAddItem = () => {};

	filterItems = () => {
		this.page = this.page + 1;
		this.props.filterItems(limit, this.page);
	};

	render() {
		const { items } = this.props;
		return (
			<S.ListItemPage>
				<S.ListItemHeader>
					<Title>{`NASA Collection`}</Title>
					<AddButton onClick={this.handleAddItem}>
						<PlusIcon />
						<Text>{`Add new item`}</Text>
					</AddButton>
				</S.ListItemHeader>
				<S.ListItemContent>
					{items.map((item, index) => (
						<Item
							{...item}
							key={`item-key-${item.id}-${index}`}
							actionComponent={<ItemAction handleEdit={this.handleEditItem} />}
						/>
					))}
				</S.ListItemContent>
			</S.ListItemPage>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		filterItems: payload => {
			dispatch(filterItemsAction(payload));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	items: listItemsSelector,
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
	filterItems: React.noop
};

ListItemPage.propTypes = {
	isFetching: PropTypes.bool,
	listItems: PropTypes.array,
	error: PropTypes.string,
	filterItems: PropTypes.func
};
