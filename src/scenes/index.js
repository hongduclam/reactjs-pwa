import React, { PureComponent } from "react";
import { createStore, applyMiddleware, compose } from "redux";

import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";
import { PersistGate } from "redux-persist/integration/react";

import { nasaCollectionReducer, searchItemEpic } from "../services/nasa-collection";
import { loadingReducer } from "../services/layout";
import { STATE_NAME } from "../constants";
import { BackDrop } from "../components";
import { ListItemPage, AddItemPage, AddOrEditItemModal } from "./nasa-collection";

const persistConfig = {
	key: "root",
	storage
};

const rootEpic = combineEpics(searchItemEpic);

export const rootReducer = combineReducers({
	[STATE_NAME.NASA_COLLECTION]: nasaCollectionReducer,
	loadingReducer,
	router: routerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createHistory();
const routerMiddlewareRedux = routerMiddleware(history);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(epicMiddleware, routerMiddlewareRedux)));
const persistor = persistStore(store);

export const ThemeContext = React.createContext({
	showBackDrop: false,
	handleToggleBackDrop: React.noop
});

class App extends PureComponent {
	state = {
		showBackDrop: false
	};
	handleToggleBackDrop = value => {
		this.setState({
			showBackDrop: value
		});
	};
	render() {
		const { showBackDrop } = this.state;
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeContext.Provider
						value={{
							showBackDrop: showBackDrop,
							handleToggleBackDrop: this.handleToggleBackDrop
						}}
					>
						<BackDrop show={showBackDrop} />
						<Router history={history}>
							<Switch>
								<Route exact path="/" component={ListItemPage} />
								<Route path="/add" component={AddItemPage} />
							</Switch>
						</Router>
						<AddOrEditItemModal />
					</ThemeContext.Provider>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
