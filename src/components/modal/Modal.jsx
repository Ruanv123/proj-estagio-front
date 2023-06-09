/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { MdOutlineClear } from "react-icons/md";

export const Modal = ({ onClose }) => {
  const [data, setData] = useState({
    nome_produto: "",
    quantidade_str: "",
    valor_str: "",
  });

  const pegarValorInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    /* event.preventDefault(); */

    const quantidade = Number(data.quantidade_str);
    const valor = parseFloat(data.valor_str);

    try {
      const req = await axios.post("http://localhost:8001/produtos", {
        nome_produto: data.nome_produto,
        quantidade: quantidade,
        valor: valor,
      });
      console.log(req);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent onSubmit={handleSubmit}>
        <S.Close onClick={onClose}>
          <MdOutlineClear />
        </S.Close>
        <S.ModalTitle>Cadastrar Produto</S.ModalTitle>
        <S.ModalContainer>
          <S.Label>
            Nome do Produto:
            <S.Input
              type="text"
              name="nome_produto"
              onChange={pegarValorInput}
              required
            />
          </S.Label>
          <S.Label>
            Quatidade:
            <S.Input
              type="text"
              name="quantidade_str"
              onChange={pegarValorInput}
              required
            />
          </S.Label>
          <S.Label>
            Valor:
            <S.Input
              type="text"
              name="valor_str"
              onChange={pegarValorInput}
              required
            />
          </S.Label>
          <S.ModalButton type="submit">Cadastrar</S.ModalButton>
        </S.ModalContainer>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
