import styled from "styled-components";

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

  @media (max-width: 900px) {
    img {
      height: 75px;
    }
    input{
      margin-right: 10px;
    }
  }
  @media (max-width: 600px) {
    img {
      height: 50px;
    }
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
    width: 120px;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 14px;
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  h1{
    font-size: 20px;
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
    &:hover{
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 18px;
    }
  }
  @media (max-width: 600px) {
    width: 50%;
    h1 {
      font-size: 14px;
    }
  }
`;