import { createSelector } from "reselect";
import { createLoadingSelector } from "../layout";
import { STATE_NAME } from "../../constants";

const nasaCollectionSelector = state => state[STATE_NAME.NASA_COLLECTION];
const generateSelector = key =>
	createSelector(
		nasaCollectionSelector,
		state => state[key]
	);

export const errorSelector = generateSelector("error");
export const listItemsSelector = generateSelector("listItems");
export const searchedItemsSelector = generateSelector("searchedItems");
export const itemDetailSelector = generateSelector("itemDetail");
export const loadingSelector = createLoadingSelector(["FILTER_ITEM", "SEARCH_ITEM_START"]);
