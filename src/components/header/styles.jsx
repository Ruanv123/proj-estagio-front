import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.header`
  background-color: ${colors.color_task};
  width: 100%;
  height: 8vh;
  display: flex;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin-left: 15px;
`;

export const ButtonModal = styled.button`
  background-color: ${colors.green[500]};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;
