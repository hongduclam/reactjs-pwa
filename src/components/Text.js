import React from "react";
import styled from "styled-components";

const variantStyles = {
	title: styled.h2``,
	subtitle: styled.h3``,
	small: styled.p`
		font-size: 1.2rem;
	`,
	normal: styled.p`
		font-size: 1.4rem;
	`
};

export const Text = ({ variant, ...otherProps }) => {
	let C = variantStyles.normal;
	if (variantStyles[variant]) {
		C = variantStyles[variant];
	}
	return <C {...otherProps} />;
};
