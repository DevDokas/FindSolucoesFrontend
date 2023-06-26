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

export const CreateNameInput = styled.input`
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const CreateEmailInput = styled.input`
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const CreateCellphoneInput = styled.input`
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const CreateUserButton = styled.button`
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

export const ClientsTable = styled.div`
  width: 80%;
  padding: 1vh;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.modalBackground};
`;

export const ClientSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClientIdSection = styled.div`
  height: 7vh;
  width: 12vw;
  display: flex;
  align-items: center;
`;

export const ClientNameSection = styled.div`
  height: 7vh;
  width: 20vw;
  display: flex;
  align-items: center;
`;

export const ClientEmailSection = styled.div`
  height: 7vh;
  width: 20vw;
  display: flex;
  align-items: center;
`;

export const ClientCellphoneSection = styled.div`
  height: 7vh;
  width: 18vw;
  display: flex;
  align-items: center;
`;

export const ClientSectionLabel = styled.p`
  padding: 2.5vh 2.5vw 2.5vh 2.5vw;
  border: 0;
  border-radius: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.titleAttributeBackground};
`;

export const ClientSectionValue = styled.p`
  padding: 2.5vh 2.5vw 2.5vh 2.5vw;
  width: 100%;
  border-bottom: 0.1vh solid ${color.darkFont};
  overflow: hidden;
`;

export const ContainerUserModalButttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
`;

export const EditUserButton = styled(FaPen)`
  font-size: 2vh;
  cursor: pointer;
`;

export const DeleteUserButton = styled(FaTrashAlt)`
  font-size: 2vh;
  color: ${color.cancelButton};
  cursor: pointer;
`;

export const DeleteUserConfirmation = styled(FaTrashAlt)`
  font-size: 2vh;
  cursor: pointer;
`;

export const UpdateUserModal = styled.div`
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

export const UpdateUserInput = styled.input`
  width: 70%;
  border: 0;
  color: ${color.darkFont};
  border-bottom: 0.1vh solid ${color.darkFont};
  background-color: ${color.modalBackground};

  &:focus {
    outline: none;
  }
`;

export const UpdateUserButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

export const UpdateUserButtonConfirm = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.confirmButton};
  cursor: pointer;
`;

export const UpdateUserButtonCancel = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.cancelButton};
  cursor: pointer;
`;
