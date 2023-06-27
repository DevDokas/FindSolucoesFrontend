'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL_CLIENTS } from '@/config/api';
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
  DeleteUserConfirmation,
  DeleteUserButton,
  EditUserButton,
  ClientIdSection,
  UpdateUserModal,
  UpdateModalCloseButton,
  UpdateUserInput,
  UpdateForm,
  UpdateUserButtonContainer,
  UpdateUserButtonConfirm,
  UpdateUserButtonCancel
} from './clientesStyle';

export default function ClientesPage(): JSX.Element {
  const [createUserModal, setCreateUserModal] = useState<boolean>(false);
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const [nullInput, setNullInput] = useState<boolean>(false);
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [deletingClient, setDeletingClient] = useState<string>('');
  const [editConfirm, setEditConfirm] = useState<boolean>(false);
  const [editingClient, setEditingClient] = useState<string>('');
  const [fetchRes, setFetchRes] = useState<any>([]);
  const [userName, setUserName] = useState<string>('');
  const [editedUserName, setEditedUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [editedUserEmail, setEditedUserEmail] = useState<string>('');
  const [userCellphone, setUserCellphone] = useState<string>('');
  const [editedUserCellphone, setEditedUserCellphone] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    axios
      .get(API_URL_CLIENTS)
      .then((res) => {
        setFetchRes(res.data.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  async function CreateUserAccount(e: any): Promise<any> {
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
        .post(API_URL_CLIENTS, data)
        .then((res) => {
          setUserCreated(true);
          toast.done('Cliente registrado com sucesso');
          router.push('/clientes');
        })
        .catch((err) => {
          toast.error('Houve um erro ao registrar o cliente.', err);
        });
    } else if (userName === '' || userEmail === '') {
      setNullInput(true);
      toast.error('Insira o nome e email para realizar o cadastro.');
    }
  }

  async function UpdateUserAccount(clientID: string): Promise<any> {
    const data = {
      data: {
        name: editedUserName,
        email: editedUserEmail,
        cellphone: editedUserCellphone
      }
    };

    await axios
      .put(API_URL_CLIENTS + clientID, data)
      .then((res) => {
        router.replace('/clientes');
      })
      .catch((err) => {
        toast.error(
          'Houve um erro ao tentar atualizar as informações do cliente',
          err
        );
      });
  }

  async function DeleteUserAccount(clientID: string): Promise<any> {
    await axios
      .delete(API_URL_CLIENTS + clientID)
      .then((res) => {
        router.refresh();
      })
      .catch((err) => {
        toast.error('Houve um erro ao tentar deletar o usuário', err);
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
                {/* TODO: Finalizar CRUD (apenas Update) */}
                <EditUserButton
                  onClick={() => {
                    setEditConfirm(true);
                    setEditingClient(cliente.id);
                  }}
                />
                {editConfirm && cliente.id === editingClient ? (
                  <UpdateUserModal>
                    <UpdateModalCloseButton
                      onClick={() => {
                        setEditConfirm(false);
                      }}
                    />
                    <UpdateForm>
                      <UpdateUserInput
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => {
                          setEditedUserName(e.target.value);
                        }}
                      />
                      <UpdateUserInput
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                          setEditedUserEmail(e.target.value);
                        }}
                      />
                      <UpdateUserInput
                        type="text"
                        placeholder="Telefone"
                        onChange={(e) => {
                          setEditedUserCellphone(e.target.value);
                        }}
                      />
                    </UpdateForm>
                    <UpdateUserButtonContainer>
                      <UpdateUserButtonConfirm
                        onClick={() => UpdateUserAccount(cliente.id)}
                      >
                        Aplicar mudanças
                      </UpdateUserButtonConfirm>
                      <UpdateUserButtonCancel
                        onClick={() => {
                          setEditConfirm(false);
                        }}
                      >
                        Cancelar mudanças
                      </UpdateUserButtonCancel>
                    </UpdateUserButtonContainer>
                  </UpdateUserModal>
                ) : null}
              </ContainerUserModalButttons>
              {deleteConfirm && cliente.id === deletingClient ? (
                <DeleteUserButton
                  onClick={async () => {
                    await DeleteUserAccount(cliente.id);
                    setDeleteConfirm(false);
                  }}
                />
              ) : (
                <DeleteUserConfirmation
                  onClick={async () => {
                    setDeleteConfirm(true);
                    setDeletingClient(cliente.id);
                  }}
                />
              )}
            </ClientSection>
          );
        })}
      </ClientsTable>
    </Container>
  );
}
