import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.form`
  user-select: none;
  background-color: white;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Close = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
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

export const Label = styled.label`
  font-size: 14px;
  width: 100%;
`;
