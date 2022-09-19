import styled from "styled-components";
import { PageStyle } from "../Homepage/Homepage-style";

export const FavoriteComponent = styled(PageStyle)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;

	h3 {
		margin-bottom: 40px;
	}

	div {
		margin: 20px 0;
		max-width: 200px;
	}
`;

export const TitleFavorites = styled.h3`
	margin: 100px 0 -30px 20px;
	font-size: 24px;
	font-weight: 700;
	color: #335470;
`;
