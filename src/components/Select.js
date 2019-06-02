import React from "react";
import styled from "styled-components";
import { DrowDownIcon } from "./Icon";
import { FlexDiv } from "./FlexDiv";

const S = {
	Select: styled(FlexDiv)`
		position: relative;
		border-radius: 3px;
		padding-top: 0.3em;
		width: 100%;
		height: 56px;
		select {
			-webkit-appearance: none;
			appearance: none;
			font-size: 14px;
			width: 100%;
			height: 100%;
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
			padding-top: 0.8em;
			padding-left: 0.5em;
			background-color: white;
		}
		svg {
			position: absolute;
			left: 95%;
			top: 1.8em;
			color: #ceced2;
			g {
				fill: #ceced2;
			}
		}

		label {
			position: absolute;
			pointer-events: none;
			transition: 0.2s ease all;
			color: #000000;
			font-size: 16px;
			font-weight: 400;
			letter-spacing: 0.13px;
			line-height: 19px;
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
	`
};

export const Select = ({ options, value, onChange, name, label, required, ...otherProps }) => {
	return (
		<S.Select>
			<select onChange={onChange} name={name} {...otherProps} value={value}>
				{options.map(({ value, text }, index) => {
					return (
						<option value={value} key={`${index}`}>
							{text}
						</option>
					);
				})}
			</select>
			<label>
				{label} {required && <span> * </span>}
			</label>
			<DrowDownIcon />
		</S.Select>
	);
};
