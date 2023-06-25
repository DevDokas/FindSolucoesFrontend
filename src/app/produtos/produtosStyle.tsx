import { FaTimes, FaTrashAlt, FaPen, FaExclamation } from 'react-icons/fa';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  padding: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.h1`
  margin-top: 10vh;
  font-size: 3vh;
`;

export const CreateModalContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 87%;
  height: 20vh;
  width: 15vw;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.modalBackground};
  transform: translate(-50%, 0);
`;

export const CreateModalCloseButton = styled(FaTimes)`
  position: fixed;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

export const CreateModalButton = styled.button`
  position: absolute;
  top: 10%;
  right: 7%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3vh;
  width: 9vw;
  padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  gap: 0.3vw;
  border: 0;
  border-radius: 3vh;
  font-size: 1.5vh;
  color: ${color.whiteFont};
  background-color: ${color.confirmButton};
`;

export const CreateInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const CreateProductInput = styled.input`
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const CreateProductButton = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1.3vh;
  color: ${color.whiteFont};
  background-color: ${color.confirmButton};
  cursor: pointer;
`;

export const FeedbackMessage = styled.p`
  text-align: center;
  font-size: 1vh;
`;

export const ProductsTable = styled.div`
  width: 80%;
  padding: 1vh;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.modalBackground};
`;

export const ProductsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsIdSection = styled.div`
  height: 7vh;
  width: 12vw;
  display: flex;
  align-items: center;
`;

export const ProductNameSection = styled.div`
  height: 7vh;
  width: 20vw;
  display: flex;
  align-items: center;
`;

export const ProductPriceSection = styled.div`
  height: 7vh;
  width: 20vw;
  display: flex;
  align-items: center;
`;

export const ProductDescriptionSection = styled.div`
  height: 7vh;
  width: 18vw;
  display: flex;
  align-items: center;
`;

export const ProductsSectionLabel = styled.p`
  padding: 2.5vh 2.5vw 2.5vh 2.5vw;
  border: 0;
  border-radius: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.titleAttributeBackground};
`;

export const ProductsSectionValue = styled.p`
  padding: 2.5vh 2.5vw 2.5vh 2.5vw;
  width: 100%;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const ContainerProductModalButttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
`;

export const EditProductButton = styled(FaPen)`
  font-size: 2vh;
  cursor: pointer;
`;

export const DeleteProductButton = styled(FaTrashAlt)`
  font-size: 2vh;
  color: ${color.cancelButton};
  cursor: pointer;
`;

export const DeleteProductConfirmation = styled(FaTrashAlt)`
  font-size: 2vh;
  cursor: pointer;
`;

export const UpdateProductModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 20vh;
  width: 15vw;
  border: 0.1vh solid ${color.darkFont};
  border-radius: 1vh;
  background-color: ${color.modalBackground};
  transform: translate(-50%, -50%);
`;

export const UpdateModalCloseButton = styled(FaTimes)`
  position: fixed;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4vh;
  gap: 1vh;
`;

export const UpdateProductInput = styled.input`
  width: 70%;
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const UpdateProductButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

export const UpdateProductButtonConfirm = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.confirmButton};
  cursor: pointer;
`;

export const UpdateProductButtonCancel = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.cancelButton};
  cursor: pointer;
`;
