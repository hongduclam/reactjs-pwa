import React, { PureComponent } from "react";
import { createStore, applyMiddleware, compose } from "redux";

import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import { nasaCollectionReducer, searchItemEpic } from "../services/nasa-collection";
import { loadingReducer } from "../services/layout";
import { STATE_NAME } from "../constants";
import NasaCollection from "../scenes/nasa-collection";
import { BackDrop } from "../components";

const rootEpic = combineEpics(searchItemEpic);

export const rootReducer = combineReducers({
	[STATE_NAME.NASA_COLLECTION]: nasaCollectionReducer,
	loadingReducer
	// router: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
// const history = createHistory();
// const routerMiddlewareRedux = routerMiddleware(history);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
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
				<ThemeContext.Provider
					value={{
						showBackDrop: showBackDrop,
						handleToggleBackDrop: this.handleToggleBackDrop
					}}
				>
					<BackDrop show={showBackDrop} />
					<NasaCollection />
				</ThemeContext.Provider>
			</Provider>
		);
	}
}

export default App;
