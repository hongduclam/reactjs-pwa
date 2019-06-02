import { createSelector } from "reselect";
import { createLoadingSelector } from "../layout";
import { STATE_NAME } from "../../constants";

const nasaCollectionSelector = state => {
	return state[STATE_NAME.NASA_COLLECTION]
};
const generateSelector = key =>
	createSelector(
		nasaCollectionSelector,
		state => state[key]
	);

export const errorSelector = generateSelector("error");
export const listItemsSelector = generateSelector("listItems");
export const searchedItemsSelector = generateSelector("searchedItems");
export const actionTypeSelector = generateSelector("actionType");
export const isOpenModalSelector = generateSelector("isOpenModal");
export const formDataSelector = generateSelector("formData");
export const searchQuerySelector = generateSelector("searchQuery");
export const filteredItemsSelector = generateSelector("filteredItems");
export const filterParamsSelector = generateSelector("filterParams");
export const resultMessageSelector = generateSelector("resultMessage");
export const loadingSelector = createLoadingSelector(["SEARCH_ITEM"]);
