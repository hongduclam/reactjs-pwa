import React from "react";
import styled from "styled-components";

const commonStyles = `
	margin: 0;
	font-weight: 400;
`;

const variantStyles = {
	title: styled.h2`
		color: ${props => props.color};
		${commonStyles}
	`,
	subtitle: styled.h3`
		margin: 0;
		${commonStyles}
		color: ${props => props.color};
	`,
	small: styled.p`
		font-size: 12px;
		color: ${props => props.color};
		letter-spacing: 0.09px;
		line-height: 21px;
		opacity: 0.6000000238418579;
		${commonStyles}
	`,
	normal: styled.p`
		font-size: 14px;
		letter-spacing: 0.09px;
		line-height: 21px;
		opacity: 0.6000000238418579;
		color: ${props => props.color};
		${commonStyles}
	`
};

export const Text = ({ variant, ...otherProps }) => {
	let C = variantStyles.normal;
	if (variantStyles[variant]) {
		C = variantStyles[variant];
	}
	return <C {...otherProps} />;
};
