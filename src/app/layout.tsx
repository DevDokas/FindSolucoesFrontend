'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  Container,
  Menu,
  Title,
  MenuButton,
  NavContainer,
  NavButtonCliente,
  NavButtonProdutos,
  NavButtonVendas,
  Footer,
  BackendLink
} from './layoutStyle';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): any {
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  const { push } = useRouter();

  return (
    <html lang="pt-BR">
      <Container>
        {openedMenu ? (
          <Menu>
            <div>
              <MenuButton
                onClick={() => {
                  setOpenedMenu(false);
                }}
              />
            </div>
            <Title
              onClick={() => {
                push('/');
                setOpenedMenu(false);
              }}
            >
              FindStore
            </Title>
            <NavContainer>
              <NavButtonCliente
                onClick={() => {
                  push('/clientes');
                  setOpenedMenu(false);
                }}
              >
                Clientes
              </NavButtonCliente>
              <NavButtonProdutos
                onClick={() => {
                  push('/produtos');
                  setOpenedMenu(false);
                }}
              >
                Produtos
              </NavButtonProdutos>
              <NavButtonVendas
                onClick={() => {
                  push('/vendas');
                  setOpenedMenu(false);
                }}
              >
                Vendas
              </NavButtonVendas>
            </NavContainer>
            <Footer>
              <BackendLink href="https://fs-api.igordokai.com">
                Acesse o backend da aplicação por aqui.
              </BackendLink>
              <br />
              <BackendLink href="https://github.com/DevDokas/FindSolucoesBackend">
                Ou saiba mais sobre aqui.
              </BackendLink>
            </Footer>
          </Menu>
        ) : (
          <MenuButton
            onClick={() => {
              setOpenedMenu(true);
            }}
          />
        )}
        {children}
      </Container>
    </html>
  );
}
