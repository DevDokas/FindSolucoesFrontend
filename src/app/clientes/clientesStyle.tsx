import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
`;

export const Main = styled.div``;

export const Form = styled.form``;

export const Title = styled.h1`
  font-size: 3vh;
`;

export const CreateModalContainer = styled.div`
  position: absolute;
  height: 50%;
  width: 30%;
  background-color: ${color.modalBackground};
`;

export const CreateModalButton = styled.button`
  position: fixed;
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
