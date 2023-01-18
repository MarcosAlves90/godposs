import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const DarkStories = (props) => {
  return (
    <>
      <div className="dark-stories-container">
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
        <Header></Header>
        <div className="dark-stories-hero">
          <div className="dark-stories-container1">
            <div className="dark-stories-card">
              <Ttulo
                heading="DARK STORIES"
                rootClassName="ttulo-root-class-name6"
              ></Ttulo>
              <h1 className="dark-stories-text">
                &quot;A energia é um encanto eterno&quot;
              </h1>
              <span className="dark-stories-text1">
                <span>
                  Inspirado nos universos da Marvel e DC Comics, Dark Stories é
                  o nome de um imenso compilado de histórias conectadas que
                  provavelmente resultarão em livros separados, ou até mesmo em
                  um mangá. &quot;Homega: O escolhido&quot; é a história
                  principal que também serve de base para as outras, e vem sendo
                  desenvolvida há bastante tempo.
                </span>
              </span>
              <div className="dark-stories-container2">
                <Voltar
                  button="Voltar"
                  rootClassName="voltar-root-class-name1"
                ></Voltar>
                <a
                  href="https://sites.google.com/view/darkstories"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dark-stories-link button"
                >
                  <span className="dark-stories-text3">DARK STORIES WIKI</span>
                </a>
              </div>
            </div>
          </div>
          <Fundo rootClassName="fundo-root-class-name5"></Fundo>
        </div>
      </div>
      <style jsx>
        {`
          .dark-stories-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .dark-stories-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .dark-stories-container1 {
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
          .dark-stories-card {
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
          .dark-stories-text {
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
          .dark-stories-text1 {
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
          .dark-stories-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .dark-stories-link {
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
          .dark-stories-link:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .dark-stories-text3 {
            color: #b78a6f;
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .dark-stories-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .dark-stories-container1 {
              max-width: 960px;
            }
            .dark-stories-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .dark-stories-hero {
              height: 555px;
            }
            .dark-stories-card {
              top: 48px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .dark-stories-text {
              display: none;
            }
            .dark-stories-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .dark-stories-hero {
              height: 648px;
            }
            .dark-stories-container1 {
              height: 809px;
            }
            .dark-stories-card {
              top: 80px;
              left: 0px;
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .dark-stories-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default DarkStories
