import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${colors.background};

	* {
		box-sizing: border-box;
	}
`;
