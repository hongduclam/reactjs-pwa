console.log("process.env", process.env);
export const BACKEND_URL = "http://localhost:3000/api";

export const STATE_NAME = {
	NASA_COLLECTION: "nasaCollection"
};

export const ACTION_TYPE = {
	ADD: "add",
	EDIT: "edit"
};

export const FILLTER_PARAM_DEFAULT = {
  page: { index: 0, size: 20 },
  sortBy: { title: "asc", date: "desc" },
  searchBy: { title: "", date: "", favorite: "" }
};
