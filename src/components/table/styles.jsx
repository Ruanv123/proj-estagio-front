import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const Table = styled.table`
  width: 80vw;
  border-collapse: collapse;
  background-color: ${colors.gray[100]};
  user-select: none;
`;

export const Tablerow = styled.tr`
  border: 1px solid #000;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.blue[200]};
  }
`;

export const Tableheader = styled.th`
  color: #000;
  border: 1px solid #000;
  padding: 5px 20px;
`;

export const Tablehead = styled.tr`
  color: #000;
  border: 1px solid #000;
  padding: 5px 20px;
`;

export const Tablecel = styled.td`
  border: 1px solid #000;
  padding: 5px;
`;

export const TableFlex = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Crement = styled.button`
  height: 26px;
  border: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: ${colors.gray[200]};
    border-radius: 10px;
  }
`;
