import { FILTER_ITEM } from "./nasaCollection.types";
import { Observable } from "rxjs";
// import { getListItems } from "../api/nasa-collection";

// export const getListItemsEpic = (action$, ...rest) => {
//   return action$
//     .ofType(FILTER_ITEM)
//     .delay(300)
//     .switchMap(action => {
//       return getListItems(action.payload).map(response => {
//         if (response.status === 500) {
//           throw response.message;
//         }
//         return listItems.success(response.data);
//       });
//     })
//     .takeUntil(action$.ofType(listItems.canceled()))
//     .catch(error => {
//       return Observable.of(listItems.error(error));
//     });
// };
