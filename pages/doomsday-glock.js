import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const DoomsdayGlock = (props) => {
  return (
    <>
      <div className="doomsday-glock-container">
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
        <div className="doomsday-glock-hero">
          <div className="doomsday-glock-container1">
            <div className="doomsday-glock-card">
              <Ttulo
                heading="THE DOOMSDAY GLOCK"
                rootClassName="ttulo-root-class-name8"
              ></Ttulo>
              <h1 className="doomsday-glock-text">
                &quot;Você parece preso em um loop&quot;
              </h1>
              <span className="doomsday-glock-text1">
                <span className="doomsday-glock-text2">The Doomsday Glock</span>
                <span>
                  {' '}
                  é o nome de um jogo criado para uma atividade escolar, mas que
                  acabou se mostrando com muito potencial. No jogo você é o
                  &quot;número dois&quot; e está preso em um tipo de loop
                  temporal, para escapar disso será necessário multiplicar e
                  somar suas habilidades, além de derrotar seus inimigos é
                  claro. Futuras atualizações podem revelar fragmentos de sua
                  verdadeira história.
                </span>
                <br></br>
                <span>
                  O jogo é atualmente desenvolvido por mim, mas inicialmente
                  tive ajuda da equipe do
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://twitter.com/DiseeObserva"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="doomsday-glock-text5">Disee</span>
                </a>
                <span>
                  .
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Mais informações e downloads do jogo podem ser encontrados em
                  sua página.
                </span>
              </span>
              <div className="doomsday-glock-container2">
                <Link href="/projetos">
                  <a className="doomsday-glock-link1">
                    <Voltar
                      button="Voltar"
                      className="doomsday-glock-component2"
                    ></Voltar>
                  </a>
                </Link>
                <a
                  href="https://dakusturoi.itch.io/doomsday-glock"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="doomsday-glock-link2 button"
                >
                  <span className="doomsday-glock-text8">Página do jogo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name9"></Fundo>
      </div>
      <style jsx>
        {`
          .doomsday-glock-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .doomsday-glock-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .doomsday-glock-container1 {
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
          .doomsday-glock-card {
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
          .doomsday-glock-text {
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
          .doomsday-glock-text1 {
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
          .doomsday-glock-text2 {
            font-style: italic;
            font-weight: 400;
          }
          .doomsday-glock-text5 {
            color: #eae4b2;
            text-decoration: underline;
          }
          .doomsday-glock-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .doomsday-glock-link1 {
            display: contents;
          }
          .doomsday-glock-component2 {
            text-decoration: none;
          }
          .doomsday-glock-link2 {
            color: #07c0d0;
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
            border-color: #07c0d0;
            border-width: 3px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0);
          }
          .doomsday-glock-link2:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .doomsday-glock-text8 {
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .doomsday-glock-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .doomsday-glock-container1 {
              max-width: 960px;
            }
            .doomsday-glock-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .doomsday-glock-hero {
              height: 654px;
            }
            .doomsday-glock-card {
              top: 79px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .doomsday-glock-text {
              display: none;
            }
            .doomsday-glock-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .doomsday-glock-hero {
              height: 644px;
            }
            .doomsday-glock-container1 {
              height: 809px;
            }
            .doomsday-glock-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .doomsday-glock-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default DoomsdayGlock
