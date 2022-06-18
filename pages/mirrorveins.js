import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const MirrorVeins = (props) => {
  return (
    <>
      <div className="mirror-veins-container">
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
        <div className="mirror-veins-hero">
          <div className="mirror-veins-container1">
            <div className="mirror-veins-card">
              <Ttulo
                heading="MIRROR VEINS"
                rootClassName="ttulo-root-class-name5"
              ></Ttulo>
              <h1 className="mirror-veins-text">
                A energia é um encanto eterno
              </h1>
              <span className="mirror-veins-text1">
                Mirror Veins é o nome da continuação do projeto Dark Stories.
              </span>
              <Link href="/projetos">
                <a className="mirror-veins-link">
                  <Voltar
                    button="Voltar"
                    className="mirror-veins-component2"
                  ></Voltar>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Fundo></Fundo>
      </div>
      <style jsx>
        {`
          .mirror-veins-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .mirror-veins-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .mirror-veins-container1 {
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
          .mirror-veins-card {
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
          .mirror-veins-text {
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
          .mirror-veins-text1 {
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
          .mirror-veins-link {
            display: contents;
          }
          .mirror-veins-component2 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .mirror-veins-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .mirror-veins-container1 {
              max-width: 960px;
            }
            .mirror-veins-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .mirror-veins-hero {
              height: 537px;
            }
            .mirror-veins-card {
              top: 81px;
              left: 0px;
              position: absolute;
              align-items: center;
            }
            .mirror-veins-text {
              display: none;
            }
            .mirror-veins-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .mirror-veins-hero {
              height: 525px;
            }
            .mirror-veins-container1 {
              height: 809px;
            }
            .mirror-veins-card {
              top: 79px;
              left: 0px;
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .mirror-veins-text1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default MirrorVeins
