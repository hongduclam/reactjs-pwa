import styled from "styled-components";

export const Button = styled.button`
	height: 2.5em;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 3px;
	cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
	background-color: #784cc0;
	color: white;
	border: none;
	height: 35px;
	padding: 0 1em;
	&:hover {
		background-color: #976be2;
	}
	&:active {
		background-color: #5d3999;
	}
	g {
		fill: white;
	}
	svg {
		padding-right: 1em;
	}
	@media (max-width: 30em) {
		span {
			display: none;
		}
		svg {
			padding-right: 0;
		}
	}
`;

export const ActionButton = styled(Button)`
	border: 1px solid #ceced2;
	color: #ceced2;
	opacity: 0.4000000059604645;
	background-color: transparent;
	width: 44px;
	height: 44px;
	&:hover {
		border: 1px solid rgba(131, 131, 141, 0.9900000095367432);
		color: rgba(131, 131, 141, 0.9900000095367432);
	}
`;
