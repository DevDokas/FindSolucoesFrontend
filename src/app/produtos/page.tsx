'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL_PRODUCTS } from '@/config/api';
import axios from 'axios';

import {
  Container,
  Form,
  Title,
  CreateModalContainer,
  CreateModalButton,
  CreateModalCloseButton,
  CreateInputDiv,
  CreateProductInput,
  CreateProductButton,
  FeedbackMessage,
  ProductsSection,
  ProductsTable,
  ProductNameSection,
  ProductPriceSection,
  ProductDescriptionSection,
  ProductsSectionLabel,
  ProductsSectionValue,
  ContainerProductModalButttons,
  DeleteProductConfirmation,
  DeleteProductButton,
  EditProductButton,
  ProductsIdSection,
  UpdateProductModal,
  UpdateModalCloseButton,
  UpdateProductInput,
  UpdateForm,
  UpdateProductButtonContainer,
  UpdateProductButtonConfirm,
  UpdateProductButtonCancel
} from './produtosStyle';

export default function ClientesPage(): JSX.Element {
  const [createProductModal, setCreateProductModal] = useState<boolean>(false);
  const [productCreated, setProductCreated] = useState<boolean>(false);
  const [nullInput, setNullInput] = useState<boolean>(false);
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [deletingProduct, setDeletingProduct] = useState<string>('');
  const [editConfirm, setEditConfirm] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<string>('');
  const [fetchRes, setFetchRes] = useState<any>([]);
  const [productName, setProductName] = useState<string>('');
  const [editedProductName, setEditedProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [editedProductPrice, setEditedProductPrice] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [editedProductDescription, setEditedProductDescription] =
    useState<string>('');

  const router = useRouter();

  useEffect(() => {
    axios
      .get(API_URL_PRODUCTS)
      .then((res) => {
        setFetchRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function CreateProductRegister(): Promise<any> {
    if (productName !== '' || productPrice !== '') {
      setNullInput(false);
      const data = {
        data: {
          name: productName,
          price: productPrice,
          description: productDescription
        }
      };

      await axios
        .post(API_URL_PRODUCTS, data)
        .then((res) => {
          setProductCreated(true);
          console.log(res);
          toast.done('Produto registrado com sucesso');
          router.push('/produtos');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Houve um erro ao registrar o produto.');
        });

      console.log(data);
    } else if (productName === '' || productPrice === '') {
      setNullInput(true);
      console.log('Insira o nome e o preço para realizar o cadastro.');
      toast.error('Insira o nome e o preço para realizar o cadastro.');
    }
  }

  async function UpdateProductRegister(productID: string): Promise<any> {
    const data = {
      data: {
        name: editedProductName,
        price: editedProductPrice,
        description: editedProductDescription
      }
    };

    await axios
      .put(API_URL_PRODUCTS + productID, data)
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function DeleteProductRegister(productID: string): Promise<any> {
    console.log(API_URL_PRODUCTS + productID);
    await axios
      .delete(API_URL_PRODUCTS + productID)
      .then((res) => {
        router.refresh();
        console.log('Produto deletado com sucesso! - LOG :', res);
      })
      .catch((err) => {
        console.log('Erro ao deletar o produto. - LOG :', err);
      });
  }

  return (
    <Container>
      <CreateModalButton
        onClick={() => {
          setCreateProductModal(true);
        }}
      >
        Adicionar produto <FaPlus />
      </CreateModalButton>
      {createProductModal ? (
        <CreateModalContainer>
          <CreateModalCloseButton
            onClick={() => {
              setCreateProductModal(false);
              setProductCreated(false);
              setNullInput(false);
            }}
          />
          <Form>
            <CreateInputDiv>
              <CreateProductInput
                type="text"
                name="productName"
                maxLength={80}
                placeholder="Nome do produto"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
              <CreateProductInput
                type="number"
                step=".01"
                min="0"
                name="productPrice"
                placeholder="Preço do produto"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
              <CreateProductInput
                type="text"
                maxLength={255}
                name="productDescription"
                placeholder="Descrição do produto"
                onChange={(e) => {
                  setProductDescription(e.target.value);
                }}
              />
            </CreateInputDiv>
            <CreateProductButton
              onClick={async () => {
                await CreateProductRegister();
              }}
            >
              Criar registro de produto
            </CreateProductButton>
            {nullInput ? (
              <FeedbackMessage>
                Preencha o nome e o preço do produto para realizar o cadastro.
              </FeedbackMessage>
            ) : null}
            {productCreated ? (
              <FeedbackMessage>
                Cliente {productName} cadastrado com sucesso.
              </FeedbackMessage>
            ) : null}
          </Form>
        </CreateModalContainer>
      ) : null}
      <Title>Produtos</Title>
      <ProductsTable>
        {fetchRes?.map((produto: any) => {
          return (
            <ProductsSection key={produto.id}>
              <ProductsIdSection>
                <ProductsSectionLabel>ID</ProductsSectionLabel>
                <ProductsSectionValue>{produto.id}</ProductsSectionValue>
              </ProductsIdSection>
              <ProductNameSection>
                <ProductsSectionLabel>Nome</ProductsSectionLabel>
                <ProductsSectionValue>
                  {produto.attributes.name}
                </ProductsSectionValue>
              </ProductNameSection>
              <ProductPriceSection>
                <ProductsSectionLabel>Preço</ProductsSectionLabel>
                <ProductsSectionValue>
                  R${produto.attributes.price}
                </ProductsSectionValue>
              </ProductPriceSection>
              <ProductDescriptionSection>
                <ProductsSectionLabel>Descrição</ProductsSectionLabel>
                <ProductsSectionValue>
                  {produto.attributes.description}
                </ProductsSectionValue>
              </ProductDescriptionSection>
              <ContainerProductModalButttons>
                <EditProductButton
                  onClick={() => {
                    setEditConfirm(true);
                    setEditingProduct(produto.id);
                  }}
                />
                {editConfirm && produto.id === editingProduct ? (
                  <UpdateProductModal>
                    <UpdateModalCloseButton
                      onClick={() => {
                        setEditConfirm(false);
                      }}
                    />
                    <UpdateForm>
                      <UpdateProductInput
                        type="text"
                        name="productName"
                        maxLength={80}
                        placeholder="Nome do produto"
                        onChange={(e) => {
                          setEditedProductName(e.target.value);
                        }}
                      />
                      <UpdateProductInput
                        type="number"
                        step=".01"
                        min="0"
                        name="productPrice"
                        placeholder="Preço do produto"
                        onChange={(e) => {
                          setEditedProductPrice(e.target.value);
                        }}
                      />
                      <UpdateProductInput
                        type="text"
                        maxLength={255}
                        name="productDescription"
                        placeholder="Descrição do produto"
                        onChange={(e) => {
                          setEditedProductDescription(e.target.value);
                        }}
                      />
                    </UpdateForm>
                    <UpdateProductButtonContainer>
                      <UpdateProductButtonConfirm
                        onClick={() => UpdateProductRegister(produto.id)}
                      >
                        Aplicar mudanças
                      </UpdateProductButtonConfirm>
                      <UpdateProductButtonCancel
                        onClick={() => {
                          setEditConfirm(false);
                        }}
                      >
                        Cancelar mudanças
                      </UpdateProductButtonCancel>
                    </UpdateProductButtonContainer>
                  </UpdateProductModal>
                ) : null}
              </ContainerProductModalButttons>
              {deleteConfirm && produto.id === deletingProduct ? (
                <DeleteProductButton
                  onClick={async () => {
                    await DeleteProductRegister(produto.id);
                    setDeleteConfirm(false);
                  }}
                />
              ) : (
                <DeleteProductConfirmation
                  onClick={async () => {
                    setDeleteConfirm(true);
                    setDeletingProduct(produto.id);
                  }}
                />
              )}
            </ProductsSection>
          );
        })}
      </ProductsTable>
    </Container>
  );
}
