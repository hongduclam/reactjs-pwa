import React, { PureComponent } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";

import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import { nasaCollectionReducer } from "../services/nasa-collection";
import { loadingReducer } from "../services/layout";
import { STATE_NAME } from "../constants";
import NasaCollection from "../scenes/nasa-collection";

const rootEpic = combineEpics();

export const rootReducer = combineReducers({
	[STATE_NAME.NASA_COLLECTION]: nasaCollectionReducer,
	loadingReducer,
	router: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const history = createHistory();
const routerMiddlewareRedux = routerMiddleware(history);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware, routerMiddlewareRedux)));
export const ThemeContext = React.createContext({
	showBackDrop: false,
	handleToggleBackDrop: React.noop
});

class App extends PureComponent {
	state = {
		showBackDrop: false
	};
	handleToggleBackDrop = () => {
		this.setState(prevState => ({
			showBackDrop: !prevState.showBackDrop
		}));
	};
	render() {
		const { showBackDrop } = this.state;
		return (
			<Provider store={store}>
				<ThemeContext.Provider
					value={{
						showBackDrop: showBackDrop,
						handleToggleBackDrop: this.handleToggleBackDrop
					}}
				>
					<ConnectedRouter history={history}>
						<NasaCollection />
					</ConnectedRouter>
				</ThemeContext.Provider>
			</Provider>
		);
	}
}

export default App;
