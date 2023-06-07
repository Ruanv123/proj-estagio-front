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
  background-color: ${colors.green.sucess};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const ModalTitle = styled.h1`
  font-size: 21;
  font-weight: bold;
`;

export const ModalButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 100%;
  background-color: #2186c4;
  padding: 12px 20px;
  cursor: pointer;
  color: ${colors.white};
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  gap: 15px;
`;

export const Input = styled.input`
  border: 1.5px solid ${colors.gray[300]};
  border-radius: 8px;
  outline: none;
  padding: 12px 20px;
  width: 100%;
`;
