import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.header`
  background-color: ${colors.gray[400]};
  height: 8vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 21px;
`;

export const ButtonModal = styled.button`
  background-color: ${colors.green.sucess};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
