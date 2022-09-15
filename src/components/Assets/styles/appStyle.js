import styled from "styled-components";
import colors from "./colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};

  * {
    box-sizing: border-box;
  }

`;