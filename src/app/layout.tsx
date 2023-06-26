'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>FindStore</title>
      </head>
      <Container>
        <ToastContainer />
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
