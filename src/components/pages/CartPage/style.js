import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 10% 50px 10%;
  font-family: Arial,sans-serif;
`;
export const Cart = styled.div`
  width: 50%;
  height: 80%;
  background-color: #fff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: scroll;
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
`;
export const CartItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  img {
    height: 100px;
    object-fit: cover;
  }
  input {
    margin-right: 20px;
  }
`;
export const LabelArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 20px;
  justify-content: space-between;

  h2{
    font-size: 22px;
    font-weight: bold;
  }
`;
export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    font-size: 22px;
    font-weight: 400;
  }
  .inventory{
    font-size: 12px;
    color: #007600;
  }
  button{
    border: 0;
    padding: 0;
    width: 150px;
    text-align: left;
    background-color: #fff;
    color: #007185;
  }
`;
export const FinalizationArea = styled.div`
  width: 30%;
  height: 80%;
  background-color: #fff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;