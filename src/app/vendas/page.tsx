'use client';
import { useEffect, useState } from 'react';
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
  SalePriceValue
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
        console.log(err);
      });
    axios
      .get(API_URL_PRODUCTS)
      .then((res) => {
        setFetchProductsRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(API_URL_SALES + '?populate=*')
      .then((res) => {
        setFetchSalesRes(res.data.data);
        console.log(fetchSalesRes);
      })
      .catch((err) => {
        console.log(err);
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

    console.log(marketCart);
    console.log(marketCartCount);
    console.log(finalPriceCalc.length);
  }

  async function registerSale(): Promise<any> {
    function addFinalValue(): void {
      let soma = 0;
      for (let i = 0; i < finalPriceCalc.length; i++) {
        soma += finalPriceCalc[i];
      }
      console.log(soma);
      finalPrice.push(soma);
    }

    addFinalValue();

    console.log(`Preço final: ${finalPrice}`);

    console.log(now);
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
    console.log(data);
    console.log(marketCart);
    console.log(clientSelected);
    console.log(marketCartCount);
    await axios
      .post(API_URL_SALES, data)
      .then((res) => {
        console.log('Deu certo');
        toast('Toast is good', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success'
        });
      })
      .catch((err) => {
        console.log(err);
        toast('Toast is good', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success'
        });
      });
  }

  console.log(clientSelected);

  return (
    <Container>
      {modalAddSale ? (
        <RegisterSaleContainer>
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
          <ProductSelectorContainer>
            {fetchProductsRes?.map((produto) => {
              return (
                <RegisterProductContainer key={produto.id}>
                  <RegisterProductName>
                    {produto.attributes.name}
                  </RegisterProductName>
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
                  >
                    Adicionar ao carrinho
                  </RegisterProductButton>
                </RegisterProductContainer>
              );
            })}
            <RegisterSaleButtonAdd onClick={() => registerSale()}>
              Registrar compra
            </RegisterSaleButtonAdd>
            <RegisterSaleButtonCancel
              onClick={() => {
                try {
                  setMarketCart([]);
                } finally {
                  console.log(marketCart);
                }
              }}
            >
              Cancelar compra
            </RegisterSaleButtonCancel>
          </ProductSelectorContainer>
        </RegisterSaleContainer>
      ) : null}
      <ShowSalesContainer>
        {fetchSalesRes?.map((venda) => {
          return (
            <SaleInfoContainer key={venda.id}>
              <SaleInfoClientName>
                {venda.attributes.client.data.attributes.name}
              </SaleInfoClientName>
              {venda.attributes.products.data.map((produto: any) => {
                return (
                  <SaleInfoProductContainer key={produto.id}>
                    <SaleInfoProductName>
                      {produto.attributes.name}
                    </SaleInfoProductName>
                    <SaleInfoProductPrice>
                      {produto.attributes.price}
                    </SaleInfoProductPrice>
                  </SaleInfoProductContainer>
                );
              })}
              {venda.attributes.numberofproducts.data.map((data: any) => {
                return (
                  <SaleProductNumContainer key={Math.random()}>
                    <SaleProductNum>{data}</SaleProductNum>
                  </SaleProductNumContainer>
                );
              })}
              <div>
                <p>{venda.attributes.saleprice}</p>
              </div>
            </SaleInfoContainer>
          );
        })}
      </ShowSalesContainer>
    </Container>
  );
}
