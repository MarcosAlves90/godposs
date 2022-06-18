import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const CRCCTD = (props) => {
  return (
    <>
      <div className="c-r-c-c-t-d-container">
        <Head>
          <title>God Poseidon</title>
          <meta
            name="description"
            content="Um portfólio do Via Charisma. Entre e veja alguns projetos interessantes."
          />
          <meta property="og:title" content="God Poseidon" />
          <meta
            property="og:description"
            content="Um portfólio do Via Charisma. Entre e veja alguns projetos interessantes."
          />
        </Head>
        <Header></Header>
        <div className="c-r-c-c-t-d-hero">
          <div className="c-r-c-c-t-d-container1">
            <div className="c-r-c-c-t-d-card">
              <Ttulo
                heading="CRCCTD"
                rootClassName="ttulo-root-class-name7"
              ></Ttulo>
              <h1 className="c-r-c-c-t-d-text">Você não deveria estar aqui</h1>
              <span className="c-r-c-c-t-d-text1">
                <span>
                  &quot;Há coisas que a humanidade não deve ter contato, e nós a
                  protegemos delas.&quot;
                </span>
                <br></br>
                <span>
                  Sendo uma história inspirada na fundação SCP, a CRCCTD é um
                  projeto que visa a instrumentalização da existência
                  desconhecida, capturando a mesma para evitar que tenha contato
                  com a humanidade.
                </span>
                <br></br>
                <span>
                  O projeto Dark Stories possuí conexões com a CRCCTD.
                </span>
              </span>
              <Voltar
                button="Voltar"
                rootClassName="voltar-root-class-name2"
              ></Voltar>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name8"></Fundo>
      </div>
      <style jsx>
        {`
          .c-r-c-c-t-d-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .c-r-c-c-t-d-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .c-r-c-c-t-d-container1 {
            width: 100%;
            height: 798px;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .c-r-c-c-t-d-card {
            flex: 0 0 auto;
            width: 996px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            align-self: flex-start;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(51, 48, 48, 0.8);
          }
          .c-r-c-c-t-d-text {
            color: #ffffff;
            font-size: 2rem;
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
            text-transform: none;
            text-decoration: overline;
          }
          .c-r-c-c-t-d-text1 {
            color: #ffffff;
            font-size: 1.25rem;
            font-family: Open Sans;
            font-weight: 400;
            line-height: 1.625;
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .c-r-c-c-t-d-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .c-r-c-c-t-d-container1 {
              max-width: 960px;
            }
            .c-r-c-c-t-d-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .c-r-c-c-t-d-card {
              top: 76px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .c-r-c-c-t-d-text {
              display: none;
            }
            .c-r-c-c-t-d-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .c-r-c-c-t-d-hero {
              height: 834px;
            }
            .c-r-c-c-t-d-container1 {
              height: 676px;
            }
            .c-r-c-c-t-d-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .c-r-c-c-t-d-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CRCCTD
