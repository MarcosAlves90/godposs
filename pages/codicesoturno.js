import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Buto from '../components/buto'
import Fundo from '../components/fundo'

const CdiceSoturno = (props) => {
  return (
    <>
      <div className="container">
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/3b3261eb-e6ce-49b7-957c-cfef4b3a71d0?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div className="hero">
          <div className="container1">
            <div className="card">
              <h1 className="text">Códice Soturno</h1>
              <h1 className="text1">
                &quot;Muito cuidado com o que deseja&quot;
              </h1>
              <span className="text2">
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
              <div className="container2">
                <Link href="/projetos">
                  <a className="link">
                    <Buto button="Voltar" className="component1"></Buto>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="rootClassName6"></Fundo>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            height: 761px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .container1 {
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
          .card {
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
            flex-direction: column;
            padding-bottom: 3rem;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .text {
            color: #e81d24;
            font-size: 3.25rem;
            text-align: center;
            font-family: Righteous;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #73cb6e;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text1 {
            color: var(--dl-color-secondary-700);
            font-size: 2rem;
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
            text-transform: none;
            text-decoration: overline;
          }
          .text2 {
            color: var(--dl-color-secondary-600);
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
          .container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .link {
            display: contents;
          }
          .component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container1 {
              max-width: 960px;
            }
            .card {
              top: 98px;
              right: 0px;
              width: 100%;
              position: static;
              align-self: flex-start;
            }
          }
          @media (max-width: 767px) {
            .hero {
              height: 680px;
            }
            .card {
              top: 101px;
              flex: 1;
              right: 0px;
              width: 100%;
              height: auto;
              position: absolute;
              align-items: center;
            }
            .text {
              font-size: 3.1rem;
            }
            .text1 {
              display: none;
            }
            .text2 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero {
              height: 702px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              top: 98px;
              left: 0px;
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .text {
              font-size: 3rem;
            }
            .text2 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CdiceSoturno
