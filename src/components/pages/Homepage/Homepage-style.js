import styled from "styled-components";

export const PageStyle = styled.div`
	margin: 80px 0 50px 0;
	width: 100%;
	height: 100%;
	color: #64646c;

	p {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const Shelf = styled.div`
	gap: 5vw;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	padding: 30px 10px;
`;

export const Product = styled.div`
	min-height: 240px;
	max-height: 500px;
	height: 38vh;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	border-radius: 15px;
	background: #e0e0e0;
	box-shadow: 10px 10px 20px #a6a6a6, -10px -10px 20px #ffffff;

	h2 {
		margin: 5px 0;
		font-weight: bold;
		font-size: 14px;
		margin-top: 6%;
	}

	img {
		width: 35vw;
		max-width: 200px;
		height: 70%;
		border-radius: calc(15px - 2%);
	}

	p {
		font-size: 14px;
	}
`;
