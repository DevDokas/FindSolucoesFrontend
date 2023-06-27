'use client';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { API_URL_CLIENTS, API_URL_PRODUCTS, API_URL_SALES } from '@/config/api';
import axios from 'axios';

import {
  Container,
  RegisterSaleContainer,
  ShowSalesContainer,
  ClientSelector,
  ClientSelectorOption,
  ProductSelectorContainer,
  RegisterProductContainer,
  RegisterProductName,
  RegisterProductInput,
  RegisterProductButton,
  RegisterSaleButtonAdd,
  RegisterSaleButtonCancel,
  SaleInfoContainer,
  SaleInfoClientName,
  SaleInfoProductContainer,
  SaleInfoProductName,
  SaleInfoProductPrice,
  SaleProductNumContainer,
  SaleProductNum,
  SalePriceContainer,
  SalePriceValue,
  SaleInfoProductNameContainer,
  SaleInfoClientNameContainer,
  SaleInfoClientNameLabel,
  SaleInfoIdContainer,
  SaleInfoIdLabel,
  SaleInfoIdValue,
  SaleInfoProductLabel,
  SaleInfoNumProductContainer,
  SaleInfoNumProductLabel,
  SaleInfoProductNameAndPriceContainer,
  SaleInfoProductPriceContainer,
  SaleInfoTotalPriceContainer,
  SaleInfoTotalPriceLabel,
  SaleInfoTotalPriceValue,
  SaleInfoProductPriceLabel,
  SaleInfoContainerClose,
  Title,
  SaleInfoContainerOpen,
  ClientSelectorLabel,
  ClientSelectorContainer,
  RegisterProductInputContainer,
  ModalTitle
} from './vendasStyle';
import 'react-toastify/dist/ReactToastify.css';
export default function VendasPage(): JSX.Element {
  const [modalAddSale, setModalAddSale] = useState<boolean>(false);
  const [fetchClientsRes, setFetchClientsRes] = useState<any[]>([]);
  const [clientSelected, setClientSelected] = useState<string>('');
  const [fetchProductsRes, setFetchProductsRes] = useState<any[]>([]);
  const [numberProductSelected, setNumberProductSelected] = useState<number>(0);
  const [marketCart, setMarketCart] = useState<number[]>([]);
  const [marketCartCount, setMarketCartCount] = useState<number[]>([]);
  const [finalPriceCalc, setFinalPriceCalc] = useState<number[]>([]);
  const [finalPrice, setFinalPrice] = useState<number[]>([]);
  const [fetchSalesRes, setFetchSalesRes] = useState<any[]>([]);
  const [inputSelected, setInputSelected] = useState();

  const now = new Date().getTime().toString();

  useEffect(() => {
    axios
      .get(API_URL_CLIENTS)
      .then((res) => {
        setFetchClientsRes(res.data.data);
      })
      .catch((err) => {
        toast.error('Algo deu errado :', err);
      });
    axios
      .get(API_URL_PRODUCTS)
      .then((res) => {
        setFetchProductsRes(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
      });
    axios
      .get(API_URL_SALES + '?populate=*')
      .then((res) => {
        setFetchSalesRes(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [fetchSalesRes]);

  function sendToCart(
    productId: number,
    productNum: number,
    productPrice: number
  ): void {
    marketCart.push(productId);
    marketCartCount.push(productNum);
    finalPriceCalc.push(productNum * productPrice);
  }

  async function registerSale(): Promise<any> {
    function addFinalValue(): void {
      let soma = 0;
      for (let i = 0; i < finalPriceCalc.length; i++) {
        soma += finalPriceCalc[i];
      }
      finalPrice.push(soma);
    }

    addFinalValue();

    const data = {
      data: {
        products: marketCart,
        client: clientSelected,
        dateandtime: now,
        numberofproducts: {
          data: marketCartCount
        },
        saleprice: finalPrice
      }
    };

    await axios
      .post(API_URL_SALES, data)
      .then((res) => {
        toast.done('Registro realizado com sucesso');
      })
      .catch((err) => {
        toast.error('Toast is good', err);
      });
  }

  return (
    <Container>
      <SaleInfoContainerOpen
        onClick={() => {
          setModalAddSale(true);
        }}
      >
        Adicionar venda <FaPlus />
      </SaleInfoContainerOpen>
      {modalAddSale ? (
        <RegisterSaleContainer>
          <ModalTitle>Registrar venda</ModalTitle>
          <SaleInfoContainerClose
            onClick={() => {
              setModalAddSale(false);
            }}
          />
          <ClientSelectorContainer>
            <ClientSelectorLabel>Selecione o cliente :</ClientSelectorLabel>
            <ClientSelector
              name="cliente"
              id="cliente"
              defaultValue=""
              onChange={(e) => {
                setClientSelected(e.target.value);
              }}
            >
              <ClientSelectorOption
                value=""
                disabled={true}
              ></ClientSelectorOption>
              {fetchClientsRes?.map((cliente) => {
                return (
                  <ClientSelectorOption key={cliente.id} value={cliente.id}>
                    {cliente.attributes.name}
                  </ClientSelectorOption>
                );
              })}
            </ClientSelector>
          </ClientSelectorContainer>
          <ProductSelectorContainer>
            <p>Selecionar produtos: </p>
            {fetchProductsRes?.map((produto) => {
              return (
                <RegisterProductContainer key={produto.id}>
                  <RegisterProductName>
                    {produto.attributes.name}
                  </RegisterProductName>
                  <RegisterProductInputContainer>
                    <RegisterProductInput
                      type="number"
                      name=""
                      min={0}
                      id=""
                      onClick={(): any => {
                        setInputSelected(produto.id);
                      }}
                      onChangeCapture={(e: any) => {
                        setNumberProductSelected(e.target.value);
                      }}
                    />
                    <RegisterProductButton
                      onClick={() => {
                        if (produto.id === inputSelected) {
                          sendToCart(
                            produto.id,
                            numberProductSelected,
                            produto.attributes.price
                          );
                        }
                      }}
                    />
                  </RegisterProductInputContainer>
                </RegisterProductContainer>
              );
            })}
            <div>
              <RegisterSaleButtonAdd onClick={() => registerSale()}>
                Registrar compra
              </RegisterSaleButtonAdd>
              <RegisterSaleButtonCancel
                onClick={() => {
                  try {
                    setMarketCart([]);
                  } finally {
                    setModalAddSale(false);
                  }
                }}
              >
                Cancelar compra
              </RegisterSaleButtonCancel>
            </div>
          </ProductSelectorContainer>
        </RegisterSaleContainer>
      ) : null}
      <Title>Vendas</Title>
      <ShowSalesContainer>
        {fetchSalesRes?.map((venda) => {
          return (
            <SaleInfoContainer key={venda.id}>
              <SaleInfoIdContainer>
                <SaleInfoIdLabel>ID :</SaleInfoIdLabel>
                <SaleInfoIdValue>{venda.id}</SaleInfoIdValue>
              </SaleInfoIdContainer>
              <SaleInfoClientNameContainer>
                <SaleInfoClientNameLabel>Cliente :</SaleInfoClientNameLabel>
                <SaleInfoClientName>
                  {venda.attributes.client.data.attributes.name}
                </SaleInfoClientName>
              </SaleInfoClientNameContainer>
              <SaleInfoProductContainer>
                <SaleInfoProductNameAndPriceContainer>
                  <SaleInfoProductNameContainer>
                    <SaleInfoProductLabel>Produtos :</SaleInfoProductLabel>
                    {venda.attributes.products.data.map((produto: any) => {
                      return (
                        <SaleInfoProductName key={produto.id}>
                          {produto.attributes.name}
                        </SaleInfoProductName>
                      );
                    })}
                  </SaleInfoProductNameContainer>
                  <SaleInfoProductPriceContainer>
                    <SaleInfoProductPriceLabel>
                      Valor do produto :
                    </SaleInfoProductPriceLabel>
                    {venda.attributes.products.data.map((produto: any) => {
                      return (
                        <SaleInfoProductPrice key={produto.id}>
                          R$ {produto.attributes.price}
                        </SaleInfoProductPrice>
                      );
                    })}
                  </SaleInfoProductPriceContainer>
                </SaleInfoProductNameAndPriceContainer>
              </SaleInfoProductContainer>
              <SaleInfoNumProductContainer>
                <SaleInfoNumProductLabel>Quantidade :</SaleInfoNumProductLabel>
                {venda.attributes.numberofproducts.data.map((data: any) => {
                  return (
                    <SaleProductNumContainer key={Math.random()}>
                      <SaleProductNum>{data}</SaleProductNum>
                    </SaleProductNumContainer>
                  );
                })}
              </SaleInfoNumProductContainer>
              <SaleInfoTotalPriceContainer>
                <SaleInfoTotalPriceLabel>Valor total :</SaleInfoTotalPriceLabel>
                <SaleInfoTotalPriceValue>
                  R$ {venda.attributes.saleprice}
                </SaleInfoTotalPriceValue>
              </SaleInfoTotalPriceContainer>
            </SaleInfoContainer>
          );
        })}
      </ShowSalesContainer>
    </Container>
  );
}
