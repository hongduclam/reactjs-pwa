import React from "react";
import styled from "styled-components";

const S = {
	Select: styled.div``
};

export const Select = ({ options, style, onChange, ...otherProps }) => {
	return (
		<S.Select {...style}>
			<select onChange={onChange} {...otherProps}>
				{options.map(({ value, text }, index) => {
					return (
						<option value={value} key={`${index}`}>
							{text}
						</option>
					);
				})}
			</select>
		</S.Select>
	);
};
