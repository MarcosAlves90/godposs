import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Header from '../components/header'
import Fundo from '../components/fundo'

const TMW = (props) => {
  return (
    <>
      <div className="t-m-w-container">
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
        <div className="t-m-w-hero">
          <div className="t-m-w-container1">
            <div className="t-m-w-card">
              <Ttulo
                heading="THE MENTAL WORLD"
                rootClassName="ttulo-root-class-name9"
              ></Ttulo>
              <h1 className="t-m-w-text">Interação e socialização</h1>
              <span className="t-m-w-text1">
                <span className="t-m-w-text2">
                  TMW (ou The Mental World) é um subprojeto da Dark Stories.
                  Consiste na criação de histórias e sistemas práticos de RPG,
                  baseados no preexistente universo de Homega.
                </span>
                <br></br>
                <span>
                  Até o momento as sessões ocorrem em um servidor do Discord
                  fechado ao público, mas que faz parte do projeto Hysax.
                </span>
                <br></br>
              </span>
              <div className="t-m-w-container2">
                <Link href="/projetos">
                  <a className="t-m-w-link">
                    <Voltar
                      button="Voltar"
                      className="t-m-w-component1"
                    ></Voltar>
                  </a>
                </Link>
                <a
                  href="https://sites.google.com/view/darkstories/HS/TMW"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="t-m-w-link1 button"
                >
                  <span className="t-m-w-text6">TMW WIKI</span>
                </a>
              </div>
            </div>
          </div>
          <Header></Header>
        </div>
        <Fundo rootClassName="fundo-root-class-name10"></Fundo>
      </div>
      <style jsx>
        {`
          .t-m-w-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .t-m-w-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .t-m-w-container1 {
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
          .t-m-w-card {
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
          .t-m-w-text {
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
          .t-m-w-text1 {
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
          .t-m-w-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .t-m-w-link {
            display: contents;
          }
          .t-m-w-component1 {
            text-decoration: none;
          }
          .t-m-w-link1 {
            color: #000000;
            height: auto;
            outline: none;
            font-size: 0.75rem;
            background: #d49789;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.4;
            margin-left: 15px;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: #b78a6f;
            border-width: 3px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: transparent;
          }
          .t-m-w-link1:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .t-m-w-text6 {
            color: rgb(183, 138, 111);
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .t-m-w-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .t-m-w-container1 {
              max-width: 960px;
            }
            .t-m-w-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .t-m-w-hero {
              height: 654px;
            }
            .t-m-w-card {
              top: 79px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .t-m-w-text {
              display: none;
            }
            .t-m-w-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
            .t-m-w-text2 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .t-m-w-hero {
              height: 644px;
            }
            .t-m-w-container1 {
              height: 809px;
            }
            .t-m-w-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .t-m-w-text1 {
              font-size: 1rem;
            }
            .t-m-w-text2 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default TMW
