import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const Table = styled.table`
  background-color: ${colors.gray[500]};
`;

export const Tablerow = styled.tr`
  border: 1px solid ${colors.gray[400]};
`;

export const Tableheader = styled.th`
  background-color: yellow;
  color: #fff;
`;
