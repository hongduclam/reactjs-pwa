import { restClient } from "../../utils/restClient";

export const search = searchQuery => {
	return restClient.get(`/search?q=${searchQuery}`);
};
