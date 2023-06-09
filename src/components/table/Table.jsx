/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { MdOutlineRemove, MdOutlineAdd, MdDeleteOutline } from "react-icons/md";

export const Table = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/produtos").then((response) => {
      setValues(response.data);
    });
  });

  const Incrementar = (id, quantidade) => {
    const quantidadeNew = (quantidade += 1);
    console.log();
    axios
      .put(`http://localhost:8001/produtos/${id}`, {
        quantidade: Number(quantidadeNew),
      })
      .then((response) => {
        console.log(
          `o id é ${id} e a quantidade atualizada foi de ${quantidadeNew}`
        );
      });
  };

  const Decrementar = (id, quantidade) => {
    const quantidadeNew = (quantidade -= 1);
    axios
      .put(`http://localhost:8001/produtos/${id}`, {
        quantidade: Number(quantidadeNew),
      })
      .then((response) => {
        console.log(
          `o id é ${id} e a quantidade atualizada foi de ${quantidadeNew}`
        );
      });
  };

  const Deletar = (id) => {
    axios.delete(`http://localhost:8001/produtos/${id}`).then(() => {
      alert(`o item foi deletado com sucesso!`);
    });
  };


  return (
    <>
      <S.Table>
        <S.Tablehead>
          <S.Tableheader>Nome Do Produto</S.Tableheader>
          <S.Tableheader>Quantidade em Estoque</S.Tableheader>
          <S.Tableheader>Valor (R$)</S.Tableheader>
          <S.Tableheader>Ações</S.Tableheader>
        </S.Tablehead>
        {values.map((item) => (
          <S.Tablerow key={item.id}>
            <S.Tablecel>{item.nome_produto}</S.Tablecel>
            <S.Tablecel>{item.quantidade}</S.Tablecel>
            <S.Tablecel>R${item.valor}</S.Tablecel>
            <S.TableFlex>
              <S.Crement onClick={() => Incrementar(item.id, item.quantidade)}>
                <MdOutlineAdd />
              </S.Crement>{" "}
              <S.Crement onClick={() => Decrementar(item.id, item.quantidade)}>
                <MdOutlineRemove />
              </S.Crement>
              <S.Crement onClick={() => Deletar(item.id)}>
                <MdDeleteOutline />
              </S.Crement>
            </S.TableFlex>
          </S.Tablerow>
        ))}
      </S.Table>
    </>
  );
};
