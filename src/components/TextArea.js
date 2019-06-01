import React from "react";
import styled from "styled-components";

const S = {};

S.TextArea = styled.div`
	position: relative;
	border-radius: 3px;
	width: 100%;
	height: 4em;
	padding-top: 0.3em;

	textarea {
		font-size: 14px;
		width: calc(100% - 0.6em);
		height: calc(100% - 1.4em);
		color: rgba(0, 0, 0, 0.8999999761581421);
		font-family: Helvetica;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.13px;
		line-height: 19px;
		opacity: 0.7999999999999999;
		text-align: left;
		border: 1px solid #ceced2;
		border-radius: 3px;
		padding-top: 1.4em;
		padding-left: 0.5em;
	}

	label {
		position: absolute;
		pointer-events: none;
		left: 1em;
		top: 40%;
		transition: 0.2s ease all;
		color: #000000;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.13px;
		line-height: 19px;
		opacity: 0.3;
	}

	textarea:focus ~ label,
	textarea:not(:focus):valid ~ label {
		top: 10px;
		bottom: 10px;
		left: 10px;
		font-size: 12px;
		opacity: 0.3;
	}
	span {
		color: red;
		font-size: 1.2em;
	}
`;

export const TextArea = ({ label, name, required, value, ...otherProps }) => {
	return (
		<S.TextArea>
			<textarea name={`${name}`} required {...otherProps}>
				{value}
			</textarea>
			{label && (
				<label htmlFor={`${name}`}>
					{label} {required && <span> * </span>}
				</label>
			)}
		</S.TextArea>
	);
};
