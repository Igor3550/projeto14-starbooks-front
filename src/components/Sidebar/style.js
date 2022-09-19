import styled from "styled-components";

export const SideBarComponent = styled.div`
	position: absolute;
	color: white;
	top: 0;
	right: 0;
	height: 100vh;
	width: 60vw;
	backdrop-filter: blur(5px) saturate(180%);
	-webkit-backdrop-filter: blur(5px) saturate(180%);
	background-color: rgba(45, 61, 93, 0.75);
	border: 1px solid rgba(255, 255, 255, 0.125);
	font-size: 20px;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 25vh;
		justify-content: space-between;
		height: 100vh;
	}

	span {
		font-weight: bold;
	}

	p {
		margin-bottom: 15px;
	}

	.icons {
		position: absolute;
		top: 10px;
		right: 10px;
		color: #ffffff;
		font-size: 26px;
	}
`;
