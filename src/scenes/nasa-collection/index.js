import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { loadingSelector } from "./../../services/nasa-collection/nasaCollection.selectors";
import { createStructuredSelector } from "reselect";
import { ListItemPage } from "./ListItemPage";
class NasaCollection extends PureComponent {
	render() {
		const { isFetching } = this.props;
		return (
			<BlockUi tag="div" blocking={isFetching}>
				<Switch>
					<Route exact path="/" component={ListItemPage} />
				</Switch>
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
