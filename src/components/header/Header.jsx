import { useState } from "react";
import * as S from "./styles";
import { Modal } from "../modal/Modal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Logo>
            <img
              src="https://www.task.com.br/static/media/logo_task.33b62a6b.webp"
              width={120}
              height={"auto"}
            />
          </S.Logo>
          <S.ButtonModal onClick={openModal}>Adcionar Produto</S.ButtonModal>
        </S.Content>
      </S.Wrapper>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <S.ModalTitle>Cadastrar Produto</S.ModalTitle>
          <S.ModalContainer>
            <S.Input type="text" placeholder="dasdadad" />
            <S.Input type="text" placeholder="dasdadad" />
            <S.Input type="text" placeholder="dasdadad" />
            <S.Input type="text" placeholder="dasdadad" />
            <S.ModalButton>Cadastrar</S.ModalButton>
          </S.ModalContainer>
        </Modal>
      )}
    </>
  );
};
