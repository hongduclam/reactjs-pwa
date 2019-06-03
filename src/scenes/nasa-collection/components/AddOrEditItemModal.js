import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";
import { Modal, Input, Select, TextArea, PrimaryButton, CheckIcon } from "../../../components";
import { createStructuredSelector } from "reselect";
import {
	addItem,
	updateItem,
	isOpenModalSelector,
	actionTypeSelector,
	closeModal,
	formDataSelector,
	formControlChange,
	filterParamsSelector,
	filterItems
} from "../../../services/nasa-collection";
import { ACTION_TYPE } from "../../../constants";

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
	handleFormAction = () => {
		const { formData, filterParams } = this.props;
		if (this.isEdit()) {
			this.props.updateItem(formData.itemId, formData);
			this.handleCloseModal();
			this.props.handleReloadPageList(filterParams);
		} else {
			this.props.addItem({
				...formData,
				isFavourite: false
			});
			this.handleCloseModal();
			this.props.gotoListPage();
		}
	};

	isEdit = () => {
		return this.props.actionType === ACTION_TYPE.EDIT;
	};

	handleCloseModal = () => {
		this.props.closeModal();
	};

	handleControlChange = ({ currentTarget: { name, value } }) => {
		this.props.handleControlChange({ name, value });
	};

	render() {
		const {
			isOpenModal,
			formData: { title, description, type, previewImgLink, previewFileUrl }
		} = this.props;
		if (!isOpenModal) return null;

		const modalTitle = this.isEdit() ? `Edit` : `Add to collection`;
		const primaryBtnLabel = this.isEdit() ? `Save` : `Add to collection`;

		return (
			<Modal open={isOpenModal} title={modalTitle} onClose={this.handleCloseModal}>
				<S.ModalContent>
					<S.FormGroup>
						<Input label={`Title`} name="title" value={title} onChange={this.handleControlChange} />
					</S.FormGroup>
					<S.FormGroup>
						<TextArea
							label={`Description`}
							name="description"
							value={description}
							onChange={this.handleControlChange}
						/>
					</S.FormGroup>
					<S.FormGroup>
						<Select onChange={this.handleControlChange} value={type} options={typeOpts} name="type" label="Type" />
					</S.FormGroup>
					<S.FormGroup>
						<Input
							onChange={this.handleControlChange}
							label={`Link preview image url`}
							required
							name="previewImgLink"
							value={previewImgLink}
						/>
					</S.FormGroup>
					{type === "video" && (
						<S.FormGroup>
							<Input
								onChange={this.handleControlChange}
								label={`Link file url`}
								required
								name="previewFileUrl"
								value={previewFileUrl}
							/>
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
		handleControlChange: payload => {
			dispatch(formControlChange(payload));
		},
		updateItem: (itemId, formData) => {
			dispatch(updateItem({ itemId, formData }));
		},
		closeModal: () => {
			dispatch(closeModal());
		},
		gotoListPage: () => {
			dispatch(push(""));
		},
		handleReloadPageList: filterParams => {
			dispatch(filterItems(filterParams));
		}
	};
};

export const mapStateToProps = createStructuredSelector({
	isOpenModal: isOpenModalSelector,
	actionType: actionTypeSelector,
	formData: formDataSelector,
	filterParams: filterParamsSelector
});

AddOrEditItemModal.propTypes = {};

const AddOrEditItemModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddOrEditItemModal);

export default AddOrEditItemModalContainer;
