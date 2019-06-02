import {
	FILTER_ITEM,
	RESET,
	SEARCH_ITEM,
	ADD_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
	UPDATE_FAVOURITE_ITEM,
	OPEN_MODAL,
	CLOSE_MODAL,
	FORM_CONTROL_CHANGE,
	SEARCH_QUERY_CHANGE,
	CHANGE_FILTER_PARAM
} from "./nasaCollection.types";
import { filterItems, transformSeachedItem } from "./nasaCollection.services";
import { cloneDeep } from "lodash";
import { FILLTER_PARAM_DEFAULT } from "../../constants";

const initState = {
	error: null,
	listItems: [],
	searchedItems: [],
	filteredItems: [],
	formData: {},
	isOpenModal: false,
	actionType: null,
	searchQuery: "",
	resultMessage: "",
	filterParams: {
		...FILLTER_PARAM_DEFAULT
	}
};

export const nasaCollectionReducer = (state = initState, action) => {
	let listItems = cloneDeep(state.listItems);
	let idx;
	switch (action.type) {
		case FILTER_ITEM:
			const filteredItems = filterItems(listItems, action.payload);
			return Object.assign({}, state, {
				filteredItems: [...filteredItems],
			});
		case CHANGE_FILTER_PARAM:
			return Object.assign({}, state, {
				filterParams: {
					...action.payload
				}
			});
		case SEARCH_ITEM.START:
			return Object.assign({}, state, {
				resultMessage: "",
				searchedItems: []
			});
		case SEARCH_ITEM.SUCCESS:
			const searchedItems = transformSeachedItem(action.payload, state.listItems);
			const resultTotal = searchedItems.length;
			const resultMessage = `${resultTotal} Result${resultTotal > 0 ? "s" : ""} for ${state.searchQuery} `;
			return Object.assign({}, state, {
				searchedItems,
				resultMessage
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
			idx = listItems.findIndex(item => item.itemId === action.payload);
			listItems[idx].isFavourite = !listItems[idx].isFavourite;
			return Object.assign({}, state, {
				listItems: [...listItems]
			});
		case DELETE_ITEM:
			return Object.assign({}, state, {
				listItems: listItems.filter(item => item.itemId !== action.payload)
			});

		case OPEN_MODAL:
			const { selectedItem, actionType } = action.payload;
			return Object.assign({}, state, {
				formData: { ...selectedItem },
				actionType,
				isOpenModal: true
			});

		case CLOSE_MODAL:
			return Object.assign({}, state, {
				formData: {},
				actionType: null,
				isOpenModal: false
			});

		case FORM_CONTROL_CHANGE:
			const { name, value } = action.payload;
			return Object.assign({}, state, {
				formData: {
					...state.formData,
					[name]: value
				}
			});

		case SEARCH_QUERY_CHANGE:
			return Object.assign({}, state, {
				searchQuery: action.payload
			});
		case RESET:
			return initState;
		default:
			return state;
	}
};
