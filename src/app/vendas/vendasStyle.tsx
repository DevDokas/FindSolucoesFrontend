import { FaTimes, FaCartPlus } from 'react-icons/fa';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 10vh;
  font-size: 3vh;
`;

export const Subtitle = styled.p`
  font-size: 2vh;
`;

export const ModalDescription = styled.p`
  text-align: center;
  font-size: 1.1vh;
`;

export const RegisterSaleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  left: 87%;
  padding: 3.5vh;
  height: 30vh;
  width: 20vw;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.modalBackground};
  transform: translate(-50%, 0);
  overflow-y: scroll;
`;

export const ShowSalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.modalBackground};
`;

export const ClientSelectorContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export const ClientSelectorLabel = styled.p`
  font-size: 1.7vh;
`;

export const ClientSelector = styled.select`
  height: 2.5vh;
  width: 65%;
`;

export const ClientSelectorOption = styled.option``;

export const ProductSelectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterProductName = styled.p``;

export const RegisterProductInput = styled.input`
  height: 2.5vh;
  width: 65%;

  &:focus {
    outline: none;
  }
`;

export const RegisterProductButton = styled(FaCartPlus)`
  font-size: 2vh;
  cursor: pointer;
`;

export const RegisterSaleButtonContainer = styled.div`
  display: flex;
  gap: 1.5vw;
`;

export const RegisterSaleButtonAdd = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.confirmButton};
  cursor: pointer;
`;

export const RegisterSaleButtonCancel = styled.button`
  margin-top: 2vh;
  padding: 0.75vh 0.75vw 0.75vh 0.75vw;
  border: 0;
  border-radius: 0.5vh;
  font-size: 1vh;
  color: ${color.whiteFont};
  background-color: ${color.cancelButton};
  cursor: pointer;
`;

export const SaleInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
  border-radius: 1vh;
`;

export const SaleInfoContainerOpen = styled.button`
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
  cursor: pointer;
`;

export const SaleInfoContainerClose = styled(FaTimes)`
  position: fixed;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

export const SaleInfoIdContainer = styled.div`
  width: fit-content;
`;

export const SaleInfoIdLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 3vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleInfoIdValue = styled.p`
  text-align: center;
`;

export const SaleInfoClientNameContainer = styled.div``;

export const SaleInfoClientNameLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleInfoClientName = styled.p`
  text-align: center;
`;

export const SaleInfoProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterProductInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

export const SaleInfoProductLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleInfoProductNameAndPriceContainer = styled.div`
  display: flex;
  gap: 5vw;
`;

export const SaleInfoProductNameContainer = styled.div``;

export const SaleInfoProductPriceLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleInfoProductName = styled.p`
  text-align: center;
`;

export const SaleInfoProductPriceContainer = styled.div``;

export const SaleInfoProductPrice = styled.p`
  text-align: center;
`;

export const SaleInfoNumProductContainer = styled.div``;

export const SaleInfoNumProductLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleProductNumContainer = styled.div``;

export const SaleProductNum = styled.p`
  text-align: center;
`;

export const SalePriceContainer = styled.div``;

export const SalePriceValue = styled.p``;

export const SaleInfoTotalPriceContainer = styled.div``;

export const SaleInfoTotalPriceLabel = styled.p`
  font-weight: 700;
  text-align: center;
  width: 5vw;
  border-bottom: 0.1vh solid ${color.darkFont};
`;

export const SaleInfoTotalPriceValue = styled.p`
  text-align: center;
`;

export const ModalTitle = styled.h1`
  font-size: 2vh;
`;
