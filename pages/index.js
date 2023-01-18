import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Fundo from '../components/fundo'

const Incio = (props) => {
  return (
    <>
      <div className="incio-container">
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
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/361a0576-f35f-4b54-b749-946972506b06?org_if_sml=1"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="incio-hero">
          <div className="incio-container1">
            <div className="incio-card">
              <Ttulo
                heading="MARCOS ALVES"
                rootClassName="ttulo-root-class-name2"
              ></Ttulo>
              <h1 className="incio-text">
                &quot;A esperança é o sonho do homem acordado.&quot;
              </h1>
              <span className="incio-text01">
                <span>
                  Olá, meu nome é Marcos Alves. Eu sempre tive vontade de marcar
                  a mente das pessoas com algo que eu tenha criado, por isso
                  tenho muitos projetos, alguns grandes, outros pequenos, mas
                  nenhum impossível.
                </span>
                <span>
                  Gosto muito de criar coisas novas e desafiar os padrões atuais
                  de formas que ninguém conseguiria pensar, e acredito que é
                  isso que me faz ser eu.
                </span>
                <span></span>
                <span>
                  Tudo que eu crio é ou tem a ver com histórias que escrevo, por
                  isso me considero muito criativo, principalmente quando
                  falamos de literatura, filosofia e física.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Caso goste dos meus projetos ou apenas queira entrar em
                  contato:
                </span>
                <br></br>
                <span></span>
                <span className="incio-text12">E-mail de contato:</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="mailto:MarcosAlves25@proton.me?subject=Contato"
                  className="incio-link"
                >
                  MarcosAlves25@proton.me
                </a>
                <br></br>
              </span>
              <div className="incio-container2">
                <div className="incio-container3">
                  <a
                    href="https://www.linkedin.com/in/marcosalveslopesjunior/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="incio-link1"
                  >
                    <svg viewBox="0 0 1024 1024" className="incio-icon">
                      <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"></path>
                    </svg>
                  </a>
                </div>
                <a
                  href="https://linktr.ee/kasugari"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="incio-link2"
                >
                  <svg viewBox="0 0 1024 1024" className="incio-icon2">
                    <path d="M832 960l192-512h-832l-192 512zM128 384l-128 576v-832h288l128 128h416v128z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name2"></Fundo>
      </div>
      <style jsx>
        {`
          .incio-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .incio-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .incio-container1 {
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
          .incio-card {
            top: 162px;
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
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(51, 48, 48, 0.8);
          }
          .incio-text {
            color: #ffffff;
            font-size: 2rem;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
            text-transform: none;
            text-decoration: overline;
          }
          .incio-text01 {
            color: rgb(255, 255, 255);
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
          .incio-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .incio-link {
            color: #daab90;
            text-decoration: underline;
          }
          .incio-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 80px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .incio-container3 {
            flex: 0 0 auto;
            width: auto;
            height: 80px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .incio-link1 {
            display: contents;
          }
          .incio-icon {
            fill: #88644e;
            width: auto;
            height: 80px;
            transition: 0.3s;
            padding-right: 10px;
            text-decoration: none;
          }
          .incio-icon:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.2);
          }
          .incio-link2 {
            display: contents;
          }
          .incio-icon2 {
            fill: #b78a6f;
            width: auto;
            height: 80px;
            transition: 0.3s;
            padding-left: 10px;
            padding-right: 10px;
            text-decoration: none;
          }
          .incio-icon2:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.2);
          }
          @media (max-width: 1200px) {
            .incio-icon {
              fill: #88644e;
              width: 88px;
              height: 100%;
              padding-right: 20px;
            }
            .incio-icon2 {
              fill: #b78a6f;
              width: 88px;
              height: 100%;
              padding-right: 20px;
            }
          }
          @media (max-width: 991px) {
            .incio-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .incio-container1 {
              max-width: 960px;
            }
            .incio-card {
              left: 0px;
              width: 100%;
              bottom: -127px;
              position: absolute;
            }
            .incio-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .incio-hero {
              height: 735px;
            }
            .incio-card {
              top: 65px;
              right: 0px;
              position: absolute;
              margin-top: 30px;
              align-items: center;
            }
            .incio-text {
              display: none;
            }
            .incio-text01 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .incio-hero {
              width: 100%;
              height: 839px;
            }
            .incio-container1 {
              height: 809px;
            }
            .incio-card {
              top: 117px;
              flex: 1;
              left: 0px;
              width: 100%;
              height: auto;
              margin: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .incio-text01 {
              font-size: 1rem;
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Incio
