import styled from "styled-components";
import colors from "../../Assets/styles/colors";

export const Order = styled.div`
	position: absolute;
	color: white;
	top: center;
	left: center;
	height: 80vh;
	width: 80vw;
	backdrop-filter: blur(5px) saturate(180%);
	-webkit-backdrop-filter: blur(5px) saturate(180%);
	background-color: rgba(45, 61, 93, 0.75);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
	font-size: 20px;

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

export const AlignDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	div {
		width: 80%;
		text-align: left;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 25px 0;

	p {
		margin-top: 10px;
		text-shadow: 0.5px 0.5px 2px #ffffff;
	}

	input {
		margin: 8px 0;
		width: 85%;
		height: 40px;
		border-radius: 20px;
		padding-left: 20px;
		font-size: 20px;
		border: 0;
		::placeholder {
			color: #404040;
		}
	}
`;

export const ButtonConfirm = styled.button`
	height: 80px;
	width: 70%;
	margin-top: 20px;
	height: 40px;
	max-width: 314px;
	border-radius: 20px;
	background-color: #fff;
	color: ${colors.darkBlue};
	font-size: 20px;
	font-weight: 700;
	border: 0;
`;
