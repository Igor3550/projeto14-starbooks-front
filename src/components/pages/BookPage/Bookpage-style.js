import styled from "styled-components";
import colors from "../../Assets/styles/colors";

export const BookStyle = styled.div`
	margin: 80px 0 50px 0;
	padding: 0 20px;
	width: 100%;
	height: 100%;
	color: #64646c;

	div:first-child {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		img {
			max-height: 200px;
		}

		span {
			font-size: 22px;
			font-weight: bold;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		h2 {
			color: ${colors.darkBlue};
			font-weight: bold;
			font-size: 26px;
		}

		h3 {
			color: ${colors.darkBlue};
			font-weight: bold;
			font-size: 22px;
		}

		span {
			color: ${colors.darkBlue};
			font-weight: bold;
		}
	}

	div:last-child {
		backdrop-filter: blur(11px) saturate(144%);
		-webkit-backdrop-filter: blur(11px) saturate(144%);
		background-color: rgba(17, 47, 103, 0.07);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.125);
		padding: 10px;
		margin-top: 20px;
	}
`;

export const Button = styled.button`
	margin-top: 10px;
	width: 60%;
	height: 35px;
	max-width: 314px;
	border-radius: 20px;
	background-color: ${colors.darkBlue};
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	border: 0;

	&&:hover {
		cursor: pointer;
	}
`;
