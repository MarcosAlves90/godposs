import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Ttulo from '../components/ttulo'
import Fundo from '../components/fundo'
import Header from '../components/header'

const Projetos = (props) => {
  return (
    <>
      <div className="projetos-container">
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
        <div className="projetos-hero">
          <div className="projetos-container01">
            <div className="projetos-card">
              <Ttulo
                heading="PROJETOS"
                rootClassName="ttulo-root-class-name4"
              ></Ttulo>
              <h1 className="projetos-text">Feitos com carinho</h1>
              <Link href="/darkstories">
                <a className="projetos-link">
                  <div className="projetos-container02">
                    <div className="projetos-container03">
                      <h1 className="projetos-text1">Dark Stories</h1>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/doomsdayglock">
                <a className="projetos-link1">
                  <div className="projetos-container04">
                    <div className="projetos-container05">
                      <h1 className="projetos-text2">DOOMSDAY GLOCK</h1>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/hysax">
                <a className="projetos-link2">
                  <div className="projetos-container06">
                    <div className="projetos-container07">
                      <h1 className="projetos-text3">HYSAX</h1>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="projetos-container08">
                <Link href="/darkstories">
                  <a className="projetos-link3">
                    <div className="projetos-container09">
                      <div className="projetos-container10">
                        <h1 className="projetos-text4">Dark Stories</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/hysax">
                  <a className="projetos-link4">
                    <div className="projetos-container11">
                      <div className="projetos-container12">
                        <h1 className="projetos-text5">HYSAX</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/doomsdayglock">
                  <a className="projetos-link5">
                    <div className="projetos-container13">
                      <div className="projetos-container14">
                        <h1 className="projetos-text6">DOOMSDAY GLOCK</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <Link href="/doomsdayglock">
                <a className="projetos-link6">
                  <div className="projetos-container15">
                    <div className="projetos-container16">
                      <h1 className="projetos-text7">THE MENTAL WORLD</h1>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name"></Fundo>
        <Header></Header>
      </div>
      <style jsx>
        {`
          .projetos-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projetos-hero {
            width: 100%;
            height: 611px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .projetos-container01 {
            width: 100%;
            height: 798px;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-card {
            left: 0px;
            width: auto;
            bottom: 250px;
            height: 391px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            position: absolute;
            align-self: flex-start;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            align-items: flex-start;
            padding-left: 3rem;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: rgba(51, 48, 48, 0.8);
          }
          .projetos-text {
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
          .projetos-link {
            display: contents;
          }
          .projetos-container02 {
            width: 262px;
            height: 68px;
            display: none;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #7e6892;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container02:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container03 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text1 {
            color: rgb(126, 104, 146);
            width: 248px;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-family: NMSFuturaProBook;
            font-weight: 700;
            text-transform: uppercase;
          }
          .projetos-link1 {
            display: contents;
          }
          .projetos-container04 {
            width: 262px;
            height: 68px;
            display: none;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #07c0d0;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container04:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container05 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .projetos-text2 {
            color: #07c0d0;
            font-size: 1.3rem;
            font-style: normal;
            font-family: NMSFuturaProBook;
            font-weight: 800;
          }
          .projetos-link2 {
            display: contents;
          }
          .projetos-container06 {
            width: 262px;
            height: 68px;
            display: none;
            grid-area: d;
            transition: 0.3s;
            align-items: center;
            border-color: #e2a1a1;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container06:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container07 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text3 {
            color: #e2a1a1;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-family: NMSFuturaProBook;
            font-weight: 700;
          }
          .projetos-container08 {
            flex: 0 0 auto;
            width: auto;
            height: 68px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .projetos-link3 {
            display: contents;
          }
          .projetos-container09 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #88644e;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container09:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container10 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text4 {
            color: #88644e;
            width: 248px;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-family: NMSFuturaProBook;
            font-weight: 700;
            text-transform: uppercase;
          }
          .projetos-link4 {
            display: contents;
          }
          .projetos-container11 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: d;
            transition: 0.3s;
            align-items: center;
            border-color: #b78a6f;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container11:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container12 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text5 {
            color: #b78a6f;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-family: NMSFuturaProBook;
            font-weight: 700;
          }
          .projetos-link5 {
            display: contents;
          }
          .projetos-container13 {
            width: 262px;
            height: 68px;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #daab90;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container13:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container14 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .projetos-text6 {
            color: #daab90;
            font-size: 1.3rem;
            font-style: normal;
            font-family: NMSFuturaProBook;
            font-weight: 800;
          }
          .projetos-link6 {
            display: contents;
          }
          .projetos-container15 {
            width: 804px;
            height: 68px;
            grid-area: e;
            align-self: center;
            margin-top: 20px;
            transition: 0.3s;
            align-items: center;
            border-color: #f5cab1;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container15:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container16 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .projetos-text7 {
            color: rgb(245, 202, 177);
            font-size: 1.3rem;
            font-style: normal;
            font-family: NMSFuturaProBook;
            font-weight: 800;
          }
          @media (max-width: 991px) {
            .projetos-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .projetos-container01 {
              max-width: 960px;
            }
            .projetos-card {
              width: 100%;
              height: 390px;
            }
            .projetos-container02 {
              width: 100%;
            }
            .projetos-text1 {
              width: 100%;
              text-align: center;
            }
            .projetos-container04 {
              width: 100%;
            }
            .projetos-container05 {
              width: 100%;
            }
            .projetos-text2 {
              width: 100%;
              text-align: center;
            }
            .projetos-container06 {
              width: 100%;
            }
            .projetos-text3 {
              width: 100%;
              text-align: center;
            }
            .projetos-container08 {
              width: 100%;
            }
            .projetos-container09 {
              width: 100%;
            }
            .projetos-text4 {
              width: 100%;
              text-align: center;
            }
            .projetos-container11 {
              width: 100%;
            }
            .projetos-text5 {
              width: 100%;
              text-align: center;
            }
            .projetos-container13 {
              width: 100%;
            }
            .projetos-container14 {
              width: 100%;
            }
            .projetos-text6 {
              width: 100%;
              text-align: center;
            }
            .projetos-container15 {
              width: 100%;
            }
            .projetos-container16 {
              width: 100%;
            }
            .projetos-text7 {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .projetos-hero {
              height: 519px;
            }
            .projetos-card {
              top: 95px;
              left: 0px;
              width: 100%;
              height: 321px;
              position: absolute;
              align-items: center;
            }
            .projetos-text {
              width: auto;
              height: auto;
              display: none;
            }
            .projetos-container02 {
              width: auto;
            }
            .projetos-text1 {
              width: auto;
              font-size: 1.3rem;
            }
            .projetos-container04 {
              width: auto;
            }
            .projetos-container05 {
              width: 100%;
            }
            .projetos-text2 {
              font-size: 1.3rem;
            }
            .projetos-container06 {
              width: auto;
            }
            .projetos-text3 {
              font-size: 1.3rem;
            }
            .projetos-container08 {
              width: auto;
            }
            .projetos-container09 {
              width: 100%;
            }
            .projetos-text4 {
              width: auto;
              font-size: 1.3rem;
            }
            .projetos-container11 {
              width: 100%;
            }
            .projetos-text5 {
              font-size: 1.3rem;
            }
            .projetos-container13 {
              width: 100%;
            }
            .projetos-container14 {
              width: 100%;
            }
            .projetos-text6 {
              font-size: 1.3rem;
            }
            .projetos-container15 {
              width: 100%;
            }
            .projetos-container16 {
              width: 100%;
            }
            .projetos-text7 {
              font-size: 1.3rem;
            }
          }
          @media (max-width: 479px) {
            .projetos-hero {
              height: 492px;
            }
            .projetos-container01 {
              width: 416px;
              height: 845px;
            }
            .projetos-card {
              top: 96px;
              left: 0px;
              width: 100%;
              height: 425px;
              padding: var(--dl-space-space-unit);
              position: absolute;
              align-self: flex-start;
            }
            .projetos-text {
              display: none;
            }
            .projetos-container02 {
              width: 100%;
              height: auto;
              display: flex;
              margin-top: 10px;
              margin-right: 0px;
              margin-bottom: 10px;
            }
            .projetos-text1 {
              width: 228px;
              font-size: 1.2rem;
            }
            .projetos-container04 {
              width: 100%;
              height: auto;
              display: flex;
              margin-right: 0px;
              margin-bottom: 10px;
            }
            .projetos-text2 {
              font-size: 1.2rem;
            }
            .projetos-container06 {
              width: 100%;
              height: auto;
              display: flex;
              margin-top: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .projetos-text3 {
              font-size: 1.2rem;
            }
            .projetos-container08 {
              display: none;
            }
            .projetos-container09 {
              width: 151px;
              height: auto;
              margin-bottom: 0px;
            }
            .projetos-text4 {
              width: 228px;
              font-size: 1.2rem;
            }
            .projetos-container11 {
              width: auto;
              height: auto;
              margin-top: 10px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .projetos-text5 {
              font-size: 1.2rem;
            }
            .projetos-container13 {
              width: 100%;
              height: auto;
              display: flex;
              margin-right: 0px;
              margin-bottom: 10px;
            }
            .projetos-text6 {
              font-size: 1.2rem;
            }
            .projetos-container15 {
              width: 100%;
              height: auto;
              display: flex;
              margin-top: 10px;
              margin-right: 0px;
              margin-bottom: 10px;
            }
            .projetos-text7 {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Projetos
