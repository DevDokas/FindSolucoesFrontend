import { FaBars } from 'react-icons/fa';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.body`
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: ${color.background};

  * {
    font-family: 'Ubuntu', sans-serif;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 20%;
  top: 0;
  left: 0;
  padding: 5vh 0 5vh 0;
  border: 0;
  background-color: ${color.navBackground};
`;

export const Title = styled.button`
  background-color: ${color.navBackground};
  width: fit-content;
  border: 0;
  font-size: 3.5vh;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    text-shadow: 2px 2px 5px #000;
  }
`;

export const MenuButton = styled(FaBars)`
  position: fixed;
  font-size: 2vh;
  top: 3.5vh;
  left: 3.5vh;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  gap: 3vh;
`;

export const NavButtonCliente = styled.button`
  background-color: ${color.navBackground};
  height: 2vh;
  width: 3.5vw;
  border: 0;
  font-size: 2vh;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const NavButtonProdutos = styled.button`
  background-color: ${color.navBackground};
  height: 2vh;
  width: 3.5vw;
  border: 0;
  font-size: 2vh;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const NavButtonVendas = styled.button`
  background-color: ${color.navBackground};
  height: 2vh;
  width: 3.5vw;
  border: 0;
  font-size: 2vh;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 1.5vh;
`;

export const BackendLink = styled.a`
  color: ${color.darkFont};
  text-decoration: none;
  font-size: 1.3vh;
  height: fit-content;
  width: fit-content;
`;
