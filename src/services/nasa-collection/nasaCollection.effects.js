import { SEARCH_ITEM } from "./nasaCollection.types";
import { Observable } from "rxjs";
import { search } from "../api/nasa-collection";
import { searchItem } from "./nasaCollection.actions";

export const searchItemEpic = (action$, ...rest) => {
	return action$
		.ofType(SEARCH_ITEM.START)
		.delay(300)
		.switchMap(action => {
			return search(action.payload).map(response => {
				if (response.status === 500) {
					throw response.message;
				}
				return searchItem.success(response.data);
			});
		})
		.takeUntil(action$.ofType(searchItem.canceled()))
		.catch(error => {
			return Observable.of(searchItem.error(error));
		});
};
