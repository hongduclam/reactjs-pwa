import React from "react";
import styled from "styled-components";

const S = {};

S.Input = styled.div`
	position: relative;
	border-radius: 3px;
	width: 100%;
	height: 56px;
	padding-top: 0.3em;

	input {
		font-size: 14px;
		color: rgba(0, 0, 0, 0.8999999761581421);
		width: calc(100% - 0.6em);
		height: calc(100% - 0.3em);
		font-family: Helvetica;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.13px;
		line-height: 19px;
		opacity: 0.7999999999999999;
		text-align: left;
		border: 1px solid #ceced2;
		border-radius: 3px;
		padding-top: 0.5em;
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

	input:focus ~ label,
	input:not(:focus):valid ~ label {
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

export const Input = ({ label, name, required, value, onChange }) => {
	return (
		<S.Input>
			<input type="text" name={`${name}`} required value={value} onChange={onChange} />
			{label && (
				<label htmlFor={`${name}`}>
					{label} {required && <span> * </span>}
				</label>
			)}
		</S.Input>
	);
};
