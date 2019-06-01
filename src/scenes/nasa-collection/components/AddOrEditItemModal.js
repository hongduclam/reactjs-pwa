import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styled from "styled-components";
import { Modal, Input, Select, TextArea, PrimaryButton, CheckIcon } from "../../../components";
import { createStructuredSelector } from "reselect";
import { itemDetailSelector, addItem, updateItem } from "../../../services/nasa-collection";

const S = {};
S.ModalContent = styled.div``;

S.ModalFooter = styled.div`
	position: absolute;
	bottom: 0;
	padding-bottom: 1em;
`;

S.FormGroup = styled.div`
	padding: 0.8em 0;
`;

const typeOpts = [{ text: "Image", value: `image` }, { text: "Video", value: `video` }];

class AddOrEditItemModal extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			itemData: {
				...props.itemData
			}
		};
		this.isEdit = props.actionType === "edit";
	}

	handleFormAction = () => {
		const { itemData } = this.state;
		if (this.isEdit) {
			this.props.updateItem(itemData.itemId, itemData);
		} else {
			this.props.addItem(itemData);
		}
	};

	handleControlChange = ({ currentTarget: { name, value } }) => {
		this.setState({
			itemData: {
				[name]: value
			}
		});
	};

	render() {
		const { open, handleClose } = this.props;
		const {
			itemData: { title, description, type, previewImgLink, previewFileUrl }
		} = this.state;

		const modalTitle = this.isEdit ? `Edit` : `Add to collection`;
		const primaryBtnLabel = this.isEdit ? `Save` : `Add to collection`;

		return (
			<Modal open={open} title={modalTitle} onClose={handleClose}>
				<S.ModalContent>
					<S.FormGroup>
						<Input label={`Title`} name="title" value={title} />
					</S.FormGroup>
					<S.FormGroup>
						<TextArea label={`Description`} name="description" value={description} />
					</S.FormGroup>
					<S.FormGroup>
						<Select onChange={this.handleControlChange} value={type} options={typeOpts} name="type" label="Type" />
					</S.FormGroup>
					<S.FormGroup>
						<Input label={`Link preview image url`} required name="previewImgLink" value={previewImgLink} />
					</S.FormGroup>
					{type === "video" && (
						<S.FormGroup>
							<Input label={`Link file url`} required name="previewFileUrl" value={previewFileUrl} />
						</S.FormGroup>
					)}
				</S.ModalContent>
				<S.ModalFooter>
					<PrimaryButton onClick={this.handleFormAction}>
						<CheckIcon />
						{primaryBtnLabel}
					</PrimaryButton>
				</S.ModalFooter>
			</Modal>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		addItem: formData => {
			dispatch(addItem(formData));
		},
		updateItem: (itemId, formData) => {
			dispatch(updateItem({ itemId, formData }));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	itemData: itemDetailSelector
});

AddOrEditItemModal.propTypes = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddOrEditItemModal);
