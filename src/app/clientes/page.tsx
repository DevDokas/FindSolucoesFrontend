'use client';
import { useState } from 'react';
import { FaTimes, FaPlus } from 'react-icons/fa';

import {
  Container,
  Main,
  Form,
  Title,
  CreateModalContainer,
  CreateModalButton
} from './clientesStyle';

export default function ClientesPage(): JSX.Element {
  const [createUserModal, setCreateUserModal] = useState<boolean>(false);

  return (
    <Container>
      <Main>
        <CreateModalButton
          onClick={() => {
            setCreateUserModal(true);
          }}
        >
          Adicionar usuário <FaPlus />
        </CreateModalButton>
        {createUserModal ? (
          <CreateModalContainer>
            <FaTimes
              onClick={() => {
                setCreateUserModal(false);
              }}
            />
            <Form></Form>
          </CreateModalContainer>
        ) : null}
        <Title>Clientes</Title>
      </Main>
    </Container>
  );
}
