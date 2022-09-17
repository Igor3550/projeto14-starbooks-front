import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${colors.background};

`;
