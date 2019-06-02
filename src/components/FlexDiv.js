import styled from "styled-components";

export const FlexDiv = styled.div`
	display: flex;
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
	width: ${props => props.width};
	flex: ${props => props.flex};
`;
