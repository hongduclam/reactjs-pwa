console.log("process.env", process.env);
export const BACKEND_URL = "/api";

export const STATE_NAME = {
	NASA_COLLECTION: "nasaCollection"
};

export const ACTION_TYPE = {
	ADD: "add",
	EDIT: "edit"
};

export const FILLTER_PARAM_DEFAULT = {
	page: { index: 0, size: 20 },
	searchByTitle: "",
	searchByDate: "",
	searchByFavourite: false,
	sortBy: "title"
};
