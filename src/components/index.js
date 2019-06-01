import styled from "styled-components";
import { Modal } from "./Modal";
import { Button, PrimaryButton, ActionButton } from "./Button";
import {
	EditIcon,
	FavouriteIcon,
	TrashIcon,
	PlusIcon,
	FavouriteActiveIcon,
	CloseIcon,
	CheckIcon,
	DrowDownIcon,
	BackIcon,
} from "./Icon";
import { FlexDiv } from "./FlexDiv";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";

import ErrorBoundary from "./ErrorBoundary";
import { Text } from "./Text";

const Saperator = styled.span`
	width: 1vw;
`;

const BackDrop = styled.div`
	opacity: 0.85;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000;
	z-index: ${props => (props.show ? 100 : 0)};
	transition: all 0.25s ease-out;
	display: ${props => (props.show ? "block" : "none")};
`;

BackDrop.displayName = "BackDrop";

export {
	Saperator,
	FlexDiv,
	BackDrop,
	Button,
	PrimaryButton,
	ActionButton,
	ErrorBoundary,
	Text,
	EditIcon,
	FavouriteIcon,
	FavouriteActiveIcon,
	TrashIcon,
	PlusIcon,
	CloseIcon,
	CheckIcon,
	Modal,
	Input,
	Select,
	DrowDownIcon,
	TextArea,
	BackIcon
};
