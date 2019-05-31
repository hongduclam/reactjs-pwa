import { FILTER_ITEM, RESET } from "./nasaCollection.types";
import { filterItems } from "./nasaCollection.services";

const initState = {
	error: null,
	listItems: [],
	allItems: [],
	listSearchedItems: []
};

export const nasaCollectionReducer = (state = initState, action) => {
	switch (action.type) {
		case FILTER_ITEM:
			const { allItems, listItems } = state;
			const filteredItems = filterItems(allItems);
			return Object.assign({}, state, {
				listItems: [...listItems, ...filteredItems]
			});
		case RESET:
			return initState;
		default:
			return state;
	}
};
