import { orderBy } from "lodash";

export const filterItems = (listItems, payload) => {
	const {
		page: { index, size },
		sortBy: { title: sortByTitle, date: sortByDate },
		searchBy: { title: searchByTitle, date: searchByDate, favorite: searchByFavorite }
	} = payload;
	const pageItems = listItems.slice(index * size, (index + 1) * size);
	const filteredItems = pageItems.filter(item => {
		const isSearchByTitle = item.title && item.title.toLowerCase().includes(searchByTitle.toLowerCase());
		const isSearchByFavorite = item.isFavourite === !!searchByFavorite;
		return isSearchByTitle || item.dateCreated === searchByDate || isSearchByFavorite;
	});
	return orderBy(filteredItems, ["title", "dateCreated"], [sortByTitle, sortByDate]);
};

export const transformSeachedItem = (data, listItems) => {
	const {
		collection: { items }
	} = data;
	return items
		.filter(item => item.links && item.data)
		.map(item => {
			const { data, links } = item;
			const itemData = data[0];
			const previewLinkObj = links.find(linkObj => linkObj.rel === "preview");
			const previewFileObj = links.find(linkObj => linkObj.rel === "captions");
			const isAdded = listItems.findIndex(itemAdded => itemAdded.itemId === itemData.nasa_id) > -1;
			return {
				itemId: itemData.nasa_id,
				dateCreated: itemData.date_created,
				description: itemData.description,
				mediaType: itemData.media_type,
				creator: itemData.secondary_creator ? itemData.secondary_creator : "Anymous User",
				title: itemData.title,
				previewImgLink: previewLinkObj ? previewLinkObj.href : "",
				previewFileUrl: previewFileObj ? previewFileObj.href : "",
				isAdded
			};
		});
};
