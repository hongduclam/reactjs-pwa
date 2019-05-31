import { filter, orderBy } from "lodash";

export const filterItems = (listItems, payload) => {
	const {
		page: { index, size },
		sortBy: { title: sortByTitle, date: sortByDate },
		searchBy: { title: searchByTitle, date: searchByDate, favorite: searchByFavorite }
	} = payload;
	const pageItems = [...listItems].slice(index * size, (index + 1) * size);
	const filteredItems = filter(pageItems, item => {
		const isSearchByTitle =
			item.title && searchByTitle && item.title.toLowerCase().includes(searchByTitle.toLowerCase());
		const isSearchByFavorite =
			item.favorite && searchByFavorite && item.favorite.toLowerCase().includes(searchByFavorite.toLowerCase());
		return isSearchByTitle || item.date === searchByDate || isSearchByFavorite;
	});
	return orderBy(filteredItems, ["title", "date"], [sortByTitle, sortByDate]);
};
