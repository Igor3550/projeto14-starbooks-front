import styled from "styled-components"

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

const InputComponent = ({ placeholder, required, type, value, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputComponent;