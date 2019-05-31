import { FILTER_ITEM } from "./nasaCollection.types";

export const filterItems = payload => {
	return {
		type: FILTER_ITEM,
		payload
	};
};
