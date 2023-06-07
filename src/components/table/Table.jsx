import { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";

export const Table = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/produtos").then((response) => {
      setValues(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <S.Table>
        <S.Tablerow>
          <S.Tableheader>Nome Do Produto</S.Tableheader>
          <S.Tableheader>Quantidade em Estoque</S.Tableheader>
          <S.Tableheader>Valor</S.Tableheader>
          <S.Tableheader>Ações</S.Tableheader>
        </S.Tablerow>
        {values.map((item) => (
          <S.Tablerow key={item.id}>
            <S.Tablecel>{item.nome_produto}</S.Tablecel>
            <S.Tablecel>{item.quantidade}</S.Tablecel>
            <S.Tablecel>R${item.valor}</S.Tablecel>
            <S.Tablecel>
              <a href="">Incrementar</a> - <a href="">Decrementar</a>
            </S.Tablecel>
          </S.Tablerow>
        ))}
      </S.Table>
    </>
  );
};
