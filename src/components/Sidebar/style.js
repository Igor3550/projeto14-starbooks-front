import styled from "styled-components";

export const SideBarComponent = styled.div`
	position: fixed;
	color: white;
	top: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 60vw;
	backdrop-filter: blur(5px) saturate(180%);
	-webkit-backdrop-filter: blur(5px) saturate(180%);
	background-color: rgba(45, 61, 93, 0.75);
	border: 1px solid rgba(255, 255, 255, 0.125);
	font-size: 20px;
	text-align: center;
	font-family: Arial, sans-serif;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
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
