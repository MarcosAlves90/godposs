import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const DarkStories = (props) => {
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
              <h1 className="text">Dark Stories</h1>
              <h1 className="text1">
                &quot;A energia é um encanto eterno&quot;
              </h1>
              <span className="text2">
                <span>
                  Inspirado nos universos da Marvel e DC Comics, Dark Stories é
                  o nome de um imenso compilado de histórias conectadas que
                  provavelmente resultarão em livros separados, ou até mesmo em
                  um mangá. &quot;Homega: O escolhido&quot; é a história
                  principal que também serve de base para as outras, e vem sendo
                  desenvolvida há bastante tempo.
                </span>
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
            src="https://images.unsplash.com/photo-1613327986042-63d4425a1a5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYxfHxwdXJwbGV8ZW58MHx8fHwxNjQ2ODc2OTc5&amp;ixlib=rb-1.2.1&amp;w=1000"
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
            background-color: #3d2d4c;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text1 {
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
          .text2 {
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
            background: #3d2d4c;
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
            .hero {
              height: 555px;
            }
            .card {
              top: 48px;
              right: 0px;
              position: absolute;
              align-items: center;
            }
            .text {
              font-size: 3.1rem;
            }
            .text1 {
              display: none;
            }
            .text2 {
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
              height: 648px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              top: 80px;
              left: 0px;
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .text {
              font-size: 3rem;
            }
            .text2 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default DarkStories