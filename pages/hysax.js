import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Header from '../components/header'
import Fundo from '../components/fundo'

const Hysax = (props) => {
  return (
    <>
      <div className="hysax-container">
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
        <div className="hysax-hero">
          <div className="hysax-container1">
            <div className="hysax-card">
              <Ttulo
                heading="HYSAX"
                rootClassName="ttulo-root-class-name1"
              ></Ttulo>
              <h1 className="hysax-text">Interação e socialização</h1>
              <span className="hysax-text1">
                Hysax é o nome de um grupo de projetos baseados na interação
                social entre várias categorias de pessoas em diferentes redes
                sociais. Por enquanto, o maior projeto dentro desse grupo é o
                Hysax: TMW, que é um servidor no discord utilizado para a
                produção de um RPG.
              </span>
              <div className="hysax-container2">
                <Link href="/projetos">
                  <a className="hysax-link">
                    <Voltar
                      button="Voltar"
                      className="hysax-component1"
                    ></Voltar>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Header></Header>
        </div>
        <Fundo rootClassName="fundo-root-class-name3"></Fundo>
      </div>
      <style jsx>
        {`
          .hysax-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hysax-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .hysax-container1 {
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
          .hysax-card {
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
          .hysax-text {
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
          .hysax-text1 {
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
          .hysax-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .hysax-link {
            display: contents;
          }
          .hysax-component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hysax-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .hysax-container1 {
              max-width: 960px;
            }
            .hysax-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hysax-hero {
              height: 654px;
            }
            .hysax-card {
              top: 79px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .hysax-text {
              display: none;
            }
            .hysax-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hysax-hero {
              height: 644px;
            }
            .hysax-container1 {
              height: 809px;
            }
            .hysax-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .hysax-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Hysax
