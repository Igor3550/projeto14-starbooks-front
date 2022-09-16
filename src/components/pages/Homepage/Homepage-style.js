import styled from "styled-components";

export const PageStyle = styled.div`
	margin: 80px 0 50px 0;
	width: 100%;
	height: 100%;
	color: #64646c;

	h3 {
		margin: 15px 0 0 20px;
		font-size: 24px;
		font-weight: 700;
		color: #335470;
	}
`;

export const Shelf = styled.div`
	gap: 5vw;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	padding: 30px 10px;
	font-size: 16px;
	font-weight: 500;
`;

export const Product = styled.div`
	min-height: 240px;
	max-height: 500px;
	height: 36vh;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	border-radius: 15px;
	background: #e0e0e0;
	box-shadow: 10px 10px 20px #a6a6a6, -10px -10px 20px #ffffff;
	word-break: break-word;

	h2 {
		margin: 5px 0;
		font-weight: bold;
		font-size: 14px;
		margin-top: 6%;
		max-width: 200px;
	}

	img {
		width: 35vw;
		max-width: 200px;
		height: 68%;
		border-radius: calc(15px - 2%);
	}

	p {
		max-width: 200px;
		color: #335470;
		font-size: 18px;
		font-weight: bold;
	}
`;
