import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  background-color: ${colors.darkBlue};
  width: 100vw;
  height: 50vh;
  max-width: 1000px;
  margin: auto;
  border-radius: 10px;
`;

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    font-weight: 400;
    color: #fff;
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

export const Input = styled.input`
  width: 60%;
  height: 40px;
  margin-top: 20px;
  outline: 0;
  padding-left: 20px;
  font-size: 20px;
  border: 0;
  border-radius: 20px;

`;

export const Button = styled.button`
  margin-top: 20px;
  width: 60%;
  height: 40px;
  max-width: 314px;
  border-radius: 20px;
  background-color: #fff;
  color: ${colors.darkBlue};
  font-size: 20px;
  font-weight: 700;
  border: 0;

  ${(params) => {
    if(params.type === 'link'){
      return `
        color:#fff;
        background-color: ${colors.darkBlue};
        font-size: 16px;
      `
    }
  }}

  &&:hover{
    cursor: pointer;
  }

`;