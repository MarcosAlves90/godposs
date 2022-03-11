import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const NarcisoGelado = (props) => {
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
              <h1 className="text">
                <span className="text1">Narciso</span>
                <span className="text2"> Gelado</span>
              </h1>
              <h1 className="text3">&quot;Apenas um grupo&quot;</h1>
              <span className="text4">
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
              <div className="container2">
                <Link href="/projetos">
                  <a className="link button">Voltar</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1627923605750-d1b949006f96?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxuYXJjaXNzdXN8ZW58MHx8fHwxNjQ2ODc2Njcx&amp;ixlib=rb-1.2.1&amp;w=1000"
            loading="eager"
            className="image"
          />
        </div>
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
            color: #e81d24;
            font-size: 3.25rem;
            text-align: center;
            font-family: Righteous;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #ffaa00;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text1 {
            color: #e8cb1d;
            font-family: Righteous;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .text2 {
            font-family: Righteous;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .text3 {
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
          .text4 {
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
            display: flex;
            position: relative;
          }
          .link {
            color: var(--dl-color-gray-white);
            outline: none;
            font-size: 0.8rem;
            background: #ffaa00;
            font-style: normal;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 600;
            line-height: 1.4;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unitandahalfunit);
            letter-spacing: -0.025rem;
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .link:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .container3 {
            display: flex;
            position: relative;
          }
          .image {
            top: 0px;
            flex: inherit;
            left: left;
            right: 0px;
            width: 902px;
            height: 100%;
            opacity: 0.5;
            position: fixed;
            object-fit: cover;
            object-position: right;
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
            .card {
              top: 76px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .text {
              font-size: 3.1rem;
            }
            .text3 {
              display: none;
            }
            .text4 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
            .image {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .hero {
              height: 834px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .text4 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default NarcisoGelado
