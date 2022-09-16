import styled from "styled-components";

export const PageStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 5%;
	margin: 80px 5% 50px 5%;
`;

export const Product = styled.div`
	width: 45%;
	max-width: 200px;
	padding: 2%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #64646c;
	background-color: #d5e3f8;
	border-radius: 15px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	margin-bottom: 5%;
	text-align: center;

	h2 {
		margin: 5px 0;
		font-weight: bold;
		font-size: 14px;
	}

	img {
		width: 100%;
		border-radius: calc(15px - 2%);
	}

	p {
		font-size: 14px;
	}
`;
