import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { loadingSelector } from "./../../services/nasa-collection/nasaCollection.selectors";
import ListItemPage from "./ListItemPage";
import AddItemPage from "./AddItemPage";
class NasaCollection extends PureComponent {
	render() {
		const { isFetching } = this.props;
		return (
			<BlockUi tag="div" blocking={isFetching}>
				<Router>
					<Switch>
						<Route exact path="/" component={ListItemPage} />
						<Route path="/add" component={AddItemPage} />
					</Switch>
				</Router>
			</BlockUi>
		);
	}
}

NasaCollection.propTypes = {};

export const mapStateToProps = createStructuredSelector({
	isFetching: loadingSelector
});

export default connect(
	mapStateToProps,
	null
)(NasaCollection);
