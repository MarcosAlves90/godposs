import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const HUmanity = (props) => {
  return (
    <>
      <div className="h-umanity-container">
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/b661a600-36d1-40ec-9b48-e5707187c246?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div className="h-umanity-hero">
          <div className="h-umanity-container1">
            <div className="h-umanity-card">
              <Ttulo heading="H:UMANITY"></Ttulo>
              <h1 className="h-umanity-text">O universo acena para mim</h1>
              <span className="h-umanity-text1">
                H:Umanity (ou Humanidade) é o nome de um rpg (role-playing game)
                de mesa criado apenas para diversão, mas que possuí uma história
                boa o suficiente para futuramente ser incluída no projeto Dark
                Stories.
              </span>
              <div className="h-umanity-container2">
                <Link href="/projetos">
                  <a className="h-umanity-link">
                    <Voltar
                      button="Voltar"
                      className="h-umanity-component2"
                    ></Voltar>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name4"></Fundo>
      </div>
      <style jsx>
        {`
          .h-umanity-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .h-umanity-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .h-umanity-container1 {
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
          .h-umanity-card {
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
          .h-umanity-text {
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
          .h-umanity-text1 {
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
          .h-umanity-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .h-umanity-link {
            display: contents;
          }
          .h-umanity-component2 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .h-umanity-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .h-umanity-container1 {
              max-width: 960px;
            }
            .h-umanity-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .h-umanity-hero {
              height: 523px;
            }
            .h-umanity-card {
              top: 76px;
              left: 0px;
              position: absolute;
              align-items: center;
            }
            .h-umanity-text {
              display: none;
            }
            .h-umanity-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .h-umanity-hero {
              height: 588px;
            }
            .h-umanity-container1 {
              height: 809px;
            }
            .h-umanity-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .h-umanity-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default HUmanity
