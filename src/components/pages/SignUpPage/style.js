import styled from "styled-components";

import colors from "../../Assets/styles/colors";

export const Container = styled.div`
  background-color: ${colors.darkBlue};
  width: 100vw;
  min-height: 50vh;
  max-width: 800px;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
  .icons {
		color: #ffffff;
		font-size: 45px;
		margin-right: 10px;
	}
`;

export const InputArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;