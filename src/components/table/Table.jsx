import { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { MdOutlineRemove, MdOutlineAdd } from "react-icons/md";

export const Table = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/produtos").then((response) => {
      setValues(response.data);
    });
  }, []);
  return (
    <>
      <S.Table>
        <S.Tablerow>
          <S.Tableheader>Nome Do Produto</S.Tableheader>
          <S.Tableheader>Quantidade em Estoque</S.Tableheader>
          <S.Tableheader>Valor (R$)</S.Tableheader>
          <S.Tableheader>Ações</S.Tableheader>
        </S.Tablerow>
        {values.map((item) => (
          <S.Tablerow key={item.id}>
            <S.Tablecel>{item.nome_produto}</S.Tablecel>
            <S.Tablecel>{item.quantidade}</S.Tablecel>
            <S.Tablecel>R${item.valor}</S.Tablecel>
            <S.TableFlex>
              <S.Crement>
                <MdOutlineAdd />
              </S.Crement>{" "}
              <S.Crement>
                <MdOutlineRemove />
              </S.Crement>
            </S.TableFlex>
          </S.Tablerow>
        ))}
      </S.Table>
    </>
  );
};
