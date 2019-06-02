import { filter, orderBy } from "lodash";

export const filterItems = (listItems, payload) => {
	const {
		page: { index, size },
		sortBy: { title: sortByTitle, date: sortByDate },
		searchBy: { title: searchByTitle, date: searchByDate, favorite: searchByFavorite }
	} = payload;
	const pageItems = [listItems.filter(item => item.isAdded)].slice(index * size, (index + 1) * size);
	const filteredItems = filter(pageItems, item => {
		const isSearchByTitle =
			item.title && searchByTitle && item.title.toLowerCase().includes(searchByTitle.toLowerCase());
		const isSearchByFavorite =
			item.favorite && searchByFavorite && item.favorite.toLowerCase().includes(searchByFavorite.toLowerCase());
		return isSearchByTitle || item.date === searchByDate || isSearchByFavorite;
	});
	return orderBy(filteredItems, ["title", "date"], [sortByTitle, sortByDate]);
};

export const transformSeachedItem = data => {
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
			const createdDate = new Date(itemData.date_created);
			let formattedDate =
				createdDate.getFullYear() +
				"-" +
				(createdDate.getMonth() + 1) +
				"-" +
				createdDate.getDate() +
				" " +
				createdDate.getHours() +
				":" +
				createdDate.getMinutes() +
				":" +
				createdDate.getSeconds();
			return {
				itemId: itemData.nasa_id,
				dateCreated: formattedDate,
				description: itemData.description,
				mediaType: itemData.media_type,
				creator: itemData.secondary_creator ? itemData.secondary_creator : "Anymous User",
				title: itemData.title,
				previewImgLink: previewLinkObj ? previewLinkObj.href : "",
				previewFileUrl: previewFileObj ? previewFileObj.href : ""
			};
		});
};
