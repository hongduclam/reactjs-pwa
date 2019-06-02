import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { Text } from "./Text";
import { CloseIcon } from "./Icon";
import { FlexDiv } from "./FlexDiv";
import { BackDrop } from ".";

const S = {};
S.Modal = styled.div`
	padding: 1em 2em 3em 2em;
	height: 80%;
	width: 50%;
	background: white;
	z-index: 9999;
	position: fixed;
	margin: auto;
	top: 5%;
	left: 0;
	right: 0;
	border-radius: 3px;
`;

S.ModalHeader = styled(FlexDiv)`
	justify-content: space-between;
	padding-bottom: 1em;
`;

const CloseButton = styled(Button)`
	color: #979797;
	background-color: transparent;
	border: none;
	g {
		fill: #ceced2;
	}
`;

S.ModalContent = styled.div``;

export const Modal = ({ children, onClose, open, title }) => {
	if (typeof open !== "boolean") {
		return null;
	}
	return (
		open &&
		ReactDOM.createPortal(
			<React.Fragment>
				<BackDrop show={open} />
				<S.Modal>
					<S.ModalHeader>
						<Text variant="title">{title}</Text>
						<CloseButton onClick={onClose}>
							<CloseIcon />
						</CloseButton>
					</S.ModalHeader>
					<S.ModalContent>{children}</S.ModalContent>
				</S.Modal>
			</React.Fragment>,
			document.body
		)
	);
};

Modal.defaultProps = {
	onClose: function() {}
};
