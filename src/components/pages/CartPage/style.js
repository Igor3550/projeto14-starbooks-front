import styled from "styled-components";
import colors from "../../Assets/styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 0 50px 0;
  font-family: Arial,sans-serif;
  overflow-y: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const Cart = styled.div`
  width: 60%;
  height: 80%;
  background-color: #fff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 900px) {
    width: 95%;
    height: 80%;
    margin-bottom: 10px;
  }
`;
export const TitleArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  h1 {
    font-size: 36px;
    font-weight: 700;
  }
  @media (max-width: 900px) {
    height: auto;
    h1, h2{
      font-size: 22px;
    }
  }
`;

export const FinalizationArea = styled.div`
  width: 30%;
  min-width: 350px;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  div:first-child {
    width: 100%;
  }
  h2{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    font-size: 28px;
    font-weight: 700;
  }
  p{
    margin-top: 10px;
    font-size: 22px;
  }
  .disable {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 900px) {
    width: 95%;
    min-width: 100px;
    margin-bottom: 5px;
    max-height: 250px;
    h2 {
      font-size: 22px;
    }
  }
`;

export const MakeOrderButton = styled.button`
  width: 80%;
  height: 60px;
  border: 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${colors.darkBlue};
  border-radius: 30px;
`;