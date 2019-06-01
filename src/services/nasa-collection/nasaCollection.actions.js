import {
	FILTER_ITEM,
	ADD_ITEM,
	SEARCH_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
	GET_ITEM,
	UPDATE_FAVOURITE_ITEM
} from "./nasaCollection.types";

export const filterItems = payload => {
	return {
		type: FILTER_ITEM,
		payload
	};
};

export const addItem = payload => {
	return {
		type: ADD_ITEM,
		payload
	};
};

export const updateItem = payload => {
	return {
		type: UPDATE_ITEM,
		payload
	};
};

export const deleteItem = payload => {
	return {
		type: DELETE_ITEM,
		payload
	};
};

export const getItem = payload => {
	return {
		type: GET_ITEM,
		payload
	};
};

export const searchItem = {
	start: payload => {
		return {
			type: SEARCH_ITEM.START,
			payload
		};
	},
	success: data => {
		return {
			type: SEARCH_ITEM.SUCCESS,
			payload: data
		};
	},
	canceled: error => {
		return {
			type: SEARCH_ITEM.CANCEL,
			error: error
		};
	},
	error: error => {
		return {
			type: SEARCH_ITEM.ERROR,
			error: error
		};
	}
};

export const updateFavouriteItem = payload => {
	return {
		type: UPDATE_FAVOURITE_ITEM,
		payload
	};
};
