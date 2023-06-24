'use client';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { API_URL } from '@/config/api';
import axios from 'axios';

import {
  Container,
  Form,
  Title,
  CreateModalContainer,
  CreateModalButton,
  CreateModalCloseButton,
  CreateInputDiv,
  CreateNameInput,
  CreateEmailInput,
  CreateCellphoneInput,
  CreateUserButton,
  FeedbackMessage,
  ClientSection,
  ClientsTable,
  ClientNameSection,
  ClientEmailSection,
  ClientCellphoneSection,
  ClientSectionLabel,
  ClientSectionValue,
  ContainerUserModalButttons,
  DeleteUserButton,
  DeleteUserConfirmation,
  EditUserButton,
  ClientIdSection
} from './clientesStyle';

export default function ClientesPage(): JSX.Element {
  const [createUserModal, setCreateUserModal] = useState<boolean>(false);
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const [nullInput, setNullInput] = useState<boolean>(false);
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [fetchRes, setFetchRes] = useState<any>([]);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCellphone, setUserCellphone] = useState<string>('');

  const router = useRouter();

  useMemo(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setFetchRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function CreateUserAccount(e: any): Promise<any> {
    e.preventDefault();

    if (userName !== '' || userEmail !== '') {
      setNullInput(false);
      const data = {
        data: {
          name: userName,
          email: userEmail,
          cellphone: userCellphone
        }
      };

      await axios
        .post(API_URL, data)
        .then((res) => {
          setUserCreated(true);
          console.log(res);
          toast.done('Cliente registrado com sucesso');
          router.refresh();
        })
        .catch((err) => {
          console.log(err);
          toast.error('Houve um erro ao registrar o cliente.');
        });

      console.log(data);
    } else if (userName === '' || userEmail === '') {
      setNullInput(true);
      console.log('Insira o nome e email para realizar o cadastro.');
      toast.error('Insira o nome e email para realizar o cadastro.');
    }
  }

  async function DeleteUserAccount(clientID: string): Promise<any> {
    console.log(API_URL + clientID);
    await axios
      .delete(API_URL + clientID)
      .then((res) => {
        console.log('Usuário deletado com sucesso! - LOG :', res);
      })
      .catch((err) => {
        console.log('Erro ao deletar o usuário. - LOG :', err);
      });
  }

  return (
    <Container>
      {/* ---Create User Modal--- */}
      <CreateModalButton
        onClick={() => {
          setCreateUserModal(true);
        }}
      >
        Adicionar usuário <FaPlus />
      </CreateModalButton>
      {createUserModal ? (
        <CreateModalContainer>
          <CreateModalCloseButton
            onClick={() => {
              setCreateUserModal(false);
              setUserCreated(false);
              setNullInput(false);
            }}
          />
          <Form>
            <CreateInputDiv>
              <CreateNameInput
                type="text"
                name="username"
                maxLength={100}
                placeholder="Nome "
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <CreateEmailInput
                type="email"
                name="useremail"
                maxLength={200}
                placeholder="Email "
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <CreateCellphoneInput
                type="text"
                minLength={10}
                maxLength={20}
                name="cellphone"
                placeholder="Telefone "
                onChange={(e) => {
                  setUserCellphone(e.target.value);
                }}
              />
            </CreateInputDiv>
            <CreateUserButton
              onClick={async (e) => {
                await CreateUserAccount(e);
              }}
            >
              Criar usuário
            </CreateUserButton>
            {nullInput ? (
              <FeedbackMessage>
                Preencha o nome e o E-mail do cliente para realizar o cadastro.
              </FeedbackMessage>
            ) : null}
            {userCreated ? (
              <FeedbackMessage>
                Cliente {userName} cadastrado com sucesso.
              </FeedbackMessage>
            ) : null}
          </Form>
        </CreateModalContainer>
      ) : null}
      {/* ---Create User Modal--- */}
      <Title>Clientes</Title>
      <ClientsTable>
        {fetchRes?.map((cliente: any) => {
          return (
            <ClientSection key={cliente.id}>
              <ClientIdSection>
                <ClientSectionLabel>ID</ClientSectionLabel>
                <ClientSectionValue>{cliente.id}</ClientSectionValue>
              </ClientIdSection>
              <ClientNameSection>
                <ClientSectionLabel>Nome</ClientSectionLabel>
                <ClientSectionValue>
                  {cliente.attributes.name}
                </ClientSectionValue>
              </ClientNameSection>
              <ClientEmailSection>
                <ClientSectionLabel>Email</ClientSectionLabel>
                <ClientSectionValue>
                  {cliente.attributes.email}
                </ClientSectionValue>
              </ClientEmailSection>
              <ClientCellphoneSection>
                <ClientSectionLabel>Telefone</ClientSectionLabel>
                <ClientSectionValue>
                  {cliente.attributes.cellphone}
                </ClientSectionValue>
              </ClientCellphoneSection>
              <ContainerUserModalButttons>
                <EditUserButton />
                <DeleteUserConfirmation
                  onClick={async () => {
                    console.log(cliente.id);
                    await DeleteUserAccount(cliente.id);
                    setDeleteConfirm(false);
                  }}
                />
              </ContainerUserModalButttons>
            </ClientSection>
          );
        })}
      </ClientsTable>
    </Container>
  );
}
