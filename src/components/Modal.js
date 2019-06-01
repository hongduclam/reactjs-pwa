import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../scenes";
import { Button } from "./Button";
import { Text } from "./Text";
import { CloseIcon } from "./Icon";
import { FlexDiv } from "./FlexDiv";

const S = {};
S.Modal = styled.div`
	padding: 1em 2em 3em 2em;
	height: 80%;
	width: 50%;
	background: white;
	z-index: 101;
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
	const { handleToggleBackDrop } = useContext(ThemeContext);
	useEffect(() => {
		if (open) {
			handleToggleBackDrop(true);
		}
	});
	const handleOnClose = () => {
		handleToggleBackDrop(false);
		onClose();
	};
	return (
		open &&
		ReactDOM.createPortal(
			<S.Modal>
				<S.ModalHeader>
					<Text variant="title">{title}</Text>
					<CloseButton onClick={handleOnClose}>
						<CloseIcon />
					</CloseButton>
				</S.ModalHeader>
				<S.ModalContent>{children}</S.ModalContent>
			</S.Modal>,
			document.body
		)
	);
};

Modal.defaultProps = {
	onClose: function() {}
};
