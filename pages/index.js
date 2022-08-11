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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/32bcf009-ddcf-42b2-ba4f-ec95d91e28de?org_if_sml=1"
          />
        </Head>
        <Header></Header>
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
                <br></br>
                <span>
                  Gosto muito de criar coisas novas e desafiar os padrões atuais
                  de formas que ninguém conseguiria pensar, e acredito que é
                  isso que me faz ser eu.
                </span>
                <br></br>
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
                <span> MarcosAlves25@proton.me</span>
                <br></br>
                <span></span>
              </span>
              <div className="incio-container2">
                <a
                  href="https://twitter.com/PanWHoney"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="incio-link"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="incio-icon"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCLL0KtW0kFO8qCcc5EmZE8w"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="incio-link1"
                >
                  <svg viewBox="0 0 1024 1024" className="incio-icon2">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.twitch.tv/homegatro"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="incio-link2"
                >
                  <svg viewBox="0 0 1024 1024" className="incio-icon4">
                    <path d="M512 248v248h-82.857v-248h82.857zM739.429 248v248h-82.857v-248h82.857zM739.429 682.286l144.571-145.143v-454.286h-682.286v599.429h186.286v124l124-124h227.429zM966.857 0v578.857l-248 248h-186.286l-124 124h-124v-124h-227.429v-661.714l62.286-165.143h847.429z"></path>
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
            flex: 0 0 auto;
            width: 996px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            align-self: flex-start;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 50px;
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
          .incio-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .incio-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .incio-link {
            display: contents;
          }
          .incio-icon {
            fill: #bf8787;
            width: 90px;
            height: 80px;
            align-self: stretch;
            transition: 0.3s;
            text-decoration: none;
          }
          .incio-icon:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .incio-link1 {
            display: contents;
          }
          .incio-icon2 {
            fill: #bf8787;
            width: 90px;
            height: 80px;
            transition: 0.3s;
            text-decoration: none;
          }
          .incio-icon2:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .incio-link2 {
            display: contents;
          }
          .incio-icon4 {
            fill: #bf8787;
            width: 90px;
            height: 80px;
            transition: 0.3s;
            text-decoration: none;
          }
          .incio-icon4:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
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
            .incio-icon {
              width: auto;
            }
            .incio-icon2 {
              width: auto;
            }
            .incio-icon4 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Incio
