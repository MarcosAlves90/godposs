import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const WhiteStories = (props) => {
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
              <Ttulo
                rootClassName="rootClassName5"
                heading="White Stories"
              ></Ttulo>
              <h1 className="text">
                &quot;A energia é um encanto eterno&quot;
              </h1>
              <span className="text1">
                White Stories é o nome de uma possível continuação para o
                projeto Dark Stories, mas nada confirmado.
              </span>
              <Link href="/projetos">
                <a className="link">
                  <Voltar button="Voltar" className="component2"></Voltar>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Fundo></Fundo>
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
            height: 800px;
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
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .text {
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
          .text1 {
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
          .link {
            display: contents;
          }
          .component2 {
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
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero {
              height: 537px;
            }
            .card {
              top: 81px;
              left: 0px;
              position: absolute;
              align-items: center;
            }
            .text {
              display: none;
            }
            .text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero {
              height: 525px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              top: 79px;
              left: 0px;
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .text1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default WhiteStories
