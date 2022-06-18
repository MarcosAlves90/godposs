import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Voltar from '../components/voltar'
import Fundo from '../components/fundo'

const NarcisoGelado = (props) => {
  return (
    <>
      <div className="narciso-gelado-container">
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
        <div className="narciso-gelado-hero">
          <div className="narciso-gelado-container1">
            <div className="narciso-gelado-card">
              <Ttulo
                heading="NARCISO GELADO"
                rootClassName="ttulo-root-class-name3"
              ></Ttulo>
              <h1 className="narciso-gelado-text">Apenas um grupo</h1>
              <span className="narciso-gelado-text1">
                Narciso Gelado é o nome de um grupo de pessoas que criam e
                desenvolvem projetos, como o projeto &quot;TCC&quot;, que é
                resumidamente um plano para a criação de um jogo que vai se
                chamar &quot;The Cloud Connection&quot;, no momento ele está em
                desenvolvimento, e é provável que demore para ficar pronto,
                porém logo logo eu e o Marck (outro membro do Narciso Gelado)
                vamos falar mais sobre o jogo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Voltar
                button="Voltar"
                rootClassName="voltar-root-class-name"
              ></Voltar>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name7"></Fundo>
      </div>
      <style jsx>
        {`
          .narciso-gelado-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .narciso-gelado-hero {
            width: 100%;
            height: 800px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .narciso-gelado-container1 {
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
          .narciso-gelado-card {
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
          .narciso-gelado-text {
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
          .narciso-gelado-text1 {
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
          @media (max-width: 991px) {
            .narciso-gelado-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .narciso-gelado-container1 {
              max-width: 960px;
            }
            .narciso-gelado-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .narciso-gelado-card {
              top: 76px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .narciso-gelado-text {
              display: none;
            }
            .narciso-gelado-text1 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .narciso-gelado-hero {
              height: 834px;
            }
            .narciso-gelado-container1 {
              height: 809px;
            }
            .narciso-gelado-card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .narciso-gelado-text1 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default NarcisoGelado
