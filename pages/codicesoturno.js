import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const CdiceSoturno = (props) => {
  return (
    <>
      <div className="cdice-soturno-container">
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
        <div className="cdice-soturno-hero">
          <div className="cdice-soturno-container1">
            <div className="cdice-soturno-card">
              <Ttulo
                heading="CÓDICE SOTURNO"
                rootClassName="ttulo-root-class-name"
              ></Ttulo>
              <h1 className="cdice-soturno-text">
                Muito cuidado com o que deseja
              </h1>
              <span className="cdice-soturno-text1">
                <span>
                  O Códice Soturno é uma comunidade voltada a construção de
                  programas e aprendizado na área de programação. Nada que é
                  desenvolvido por essa comunidade possuí uso comercial, tudo é
                  feito apenas por experimentação e estudo, pois nesse caso, a
                  ciência é mais importante que lucro.
                </span>
                <br></br>
                <span>
                  Um dos atuais projetos dessa comunidade é o
                  &quot;Oceanite&quot;, um injetor de scripts feito para um jogo
                  bastante conhecido. Ele ainda está em desenvolvimento, por
                  isso sua versão atual (Prime 1) se encontra atualmente
                  inoperante.
                </span>
                <br></br>
                <span></span>
              </span>
              <div className="cdice-soturno-container2">
                <Link href="/projetos">
                  <a className="cdice-soturno-link">
                    <Voltar
                      button="Voltar"
                      className="cdice-soturno-component2"
                    ></Voltar>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name6"></Fundo>
      </div>
      <style jsx>
        {`
          .cdice-soturno-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cdice-soturno-hero {
            width: 100%;
            height: 761px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .cdice-soturno-container1 {
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
          .cdice-soturno-card {
            top: 160px;
            flex: 0 0 auto;
            left: 0px;
            width: 996px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            position: absolute;
            align-self: flex-start;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            padding-bottom: 3rem;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(51, 48, 48, 0.8);
          }
          .cdice-soturno-text {
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
          .cdice-soturno-text1 {
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
          .cdice-soturno-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .cdice-soturno-link {
            display: contents;
          }
          .cdice-soturno-component2 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .cdice-soturno-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .cdice-soturno-container1 {
              max-width: 960px;
            }
            .cdice-soturno-card {
              top: 98px;
              right: 0px;
              width: 100%;
              position: static;
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .cdice-soturno-hero {
              height: 680px;
            }
            .cdice-soturno-card {
              top: 101px;
              flex: 1;
              right: 0px;
              width: 100%;
              height: auto;
              position: absolute;
              align-items: center;
            }
            .cdice-soturno-text {
              display: none;
            }
            .cdice-soturno-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .cdice-soturno-hero {
              height: 702px;
            }
            .cdice-soturno-container1 {
              height: 809px;
            }
            .cdice-soturno-card {
              top: 98px;
              left: 0px;
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .cdice-soturno-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CdiceSoturno
