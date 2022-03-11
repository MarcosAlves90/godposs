import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const Hysax = (props) => {
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
              <Ttulo rootClassName="rootClassName1" heading="Hysax"></Ttulo>
              <h1 className="text">Interação e socialização</h1>
              <span className="text1">
                Hysax é o nome de um grupo de projetos baseados na interação
                social entre várias categorias de pessoas em diferentes redes
                sociais. Por enquanto, o maior projeto dentro desse grupo é o
                Hysax: Café, que é um servidor no discord com regras rígidas e
                um futuro promissor.
              </span>
              <div className="container2">
                <Link href="/projetos">
                  <a className="link">
                    <Voltar button="Voltar" className="component2"></Voltar>
                  </a>
                </Link>
                <a
                  href="https://discord.gg/4zHQHWeFff"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link1 button"
                >
                  <span className="text2">
                    <span>Entrar no hysax: café</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="rootClassName3"></Fundo>
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
          .component2 {
            text-decoration: none;
          }
          .link1 {
            color: var(--dl-color-gray-white);
            outline: none;
            font-size: 0.75rem;
            background: #b36f60;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.4;
            margin-left: 15px;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: #4c4d50;
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .link1:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .text2 {
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 600;
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
              height: 654px;
            }
            .card {
              top: 79px;
              right: 0px;
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
              height: 644px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Hysax
