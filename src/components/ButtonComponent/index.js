import styled from "styled-components";
import colors from "../Assets/styles/colors";

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

const ButtonComponent = (props) => {
  return (
    <Button type={props.type} onClick={props.onClick}>{props.children}</Button>
  )
}

export default ButtonComponent;