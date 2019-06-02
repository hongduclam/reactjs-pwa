import {
	FILTER_ITEM,
	RESET,
	SEARCH_ITEM,
	ADD_ITEM,
	GET_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
	UPDATE_FAVOURITE_ITEM
} from "./nasaCollection.types";
import { filterItems } from "./nasaCollection.services";
import { cloneDeep } from "lodash";

const initState = {
	error: null,
	listItems: [
		{
			description: "Cassini and Chandrayaan-1 Agree",
			title: "Cassini and Chandrayaan-1 Agree",
			creator: "NASA/ISRO/JPL-Caltech/USGS/Brown Univ.",
			id: "PIA12227",
			dateCreated: "2009-09-24T18:00:14Z",
			imgThumbUrl: "https://images-assets.nasa.gov/image/PIA12227/PIA12227~thumb.jpg"
		}
	],
	searchedItems: [],
	itemDetail: null
};

export const nasaCollectionReducer = (state = initState, action) => {
	let listItems = cloneDeep(state.listItems);
	let idx;
	switch (action.type) {
		case FILTER_ITEM:
			const filteredItems = filterItems(listItems, action.payload);
			return Object.assign({}, state, {
				listItems: [...filteredItems]
			});
		case SEARCH_ITEM.SUCCESS:
			return Object.assign({}, state, {
				searchedItems: [...action.payload]
			});
		case ADD_ITEM:
			return Object.assign({}, state, {
				listItems: [...listItems, action.payload]
			});
		case UPDATE_ITEM:
			const { itemId, formData } = action.payload;
			idx = listItems.findIndex(item => item.itemId === itemId);
			listItems[idx] = { ...listItems[idx], ...formData };
			return Object.assign({}, state, {
				listItems: [...listItems]
			});
		case UPDATE_FAVOURITE_ITEM:
			idx = listItems.findIndex(item => item.itemId === itemId);
			listItems[idx].isFavourite = !listItems[idx].isFavourite;
			return Object.assign({}, state, {
				listItems: [...listItems]
			});
		case DELETE_ITEM:
			return Object.assign({}, state, {
				listItems: listItems.filter(item => item.id !== action.payload.itemId)
			});
		case GET_ITEM:
			const item = state.allItems.find(item => item.itemId === action.payload.itemId);
			return Object.assign({}, state, {
				itemDetail: { ...item }
			});
		case RESET:
			return initState;
		default:
			return state;
	}
};
