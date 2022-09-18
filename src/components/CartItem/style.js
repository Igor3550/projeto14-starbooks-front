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
    &:hover{
      cursor: pointer;
    }
  }
`;