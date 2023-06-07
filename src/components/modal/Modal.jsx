import * as S from "./styles";

export const Modal = ({ onClose, children }) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.Close onClick={onClose}>x</S.Close>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
