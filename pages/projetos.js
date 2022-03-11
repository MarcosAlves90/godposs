import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Fundo from '../components/fundo'

const Projetos = (props) => {
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
          <div className="container01">
            <div className="card">
              <Ttulo rootClassName="rootClassName4" heading="Projetos"></Ttulo>
              <h1 className="text">Feitos com carinho</h1>
              <div className="container02">
                <Link href="/codicesoturno">
                  <a className="link">
                    <div className="container03">
                      <div className="container04">
                        <h1 className="text1"> Códice Soturno</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/whitestories">
                  <a className="link1">
                    <div className="container05">
                      <div className="container06">
                        <h1 className="text2">White Stories</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="container07">
                <Link href="/humanity">
                  <a className="link2">
                    <div className="container08">
                      <div className="container09">
                        <h1 className="text3">H:umanity</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/hysax">
                  <a className="link3">
                    <div className="container10">
                      <div className="container11">
                        <h1 className="text4">Hysax</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="container12">
                <Link href="/narcisogelado">
                  <a className="link4">
                    <div className="container13">
                      <div className="container14">
                        <h1 className="text5">Narciso Gelado</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/darkstories">
                  <a className="link5">
                    <div className="container15">
                      <div className="container16">
                        <h1 className="text6">Dark Stories</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="rootClassName"></Fundo>
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
            height: 694px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .container01 {
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
          .card {
            width: 996px;
            height: 456px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            position: relative;
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
          .container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .link {
            display: contents;
          }
          .container03 {
            width: 262px;
            height: 68px;
            display: flex;
            opacity: 1;
            grid-area: a;
            transition: 0.3s;
            align-items: center;
            border-color: #ea885e;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #fdeee8;
          }
          .container03:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container04 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #e4092a;
            flex-direction: column;
            justify-content: center;
          }
          .text1 {
            color: #ea885e;
            font-size: 1.5rem;
            font-style: normal;
            font-family: Fugaz One;
            font-weight: 700;
          }
          .link1 {
            display: contents;
          }
          .container05 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: f;
            transition: 0.3s;
            align-items: center;
            border-color: #BDBDD4;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .container05:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container06 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text2 {
            color: #bdbdd4;
            font-size: 1.5rem;
            font-style: normal;
            font-family: Roboto Slab;
            font-weight: 800;
          }
          .container07 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .link2 {
            display: contents;
          }
          .container08 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: b;
            transition: 0.3s;
            align-items: center;
            border-color: #5198a6;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #c8e4ea;
          }
          .container08:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container09 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text3 {
            color: #5198a6;
            font-size: 1.7rem;
            font-style: normal;
            font-family: Rubik Mono One;
            font-weight: 700;
          }
          .link3 {
            display: contents;
          }
          .container10 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: d;
            transition: 0.3s;
            align-items: center;
            border-color: #e2a1a1;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #f5dbdb;
          }
          .container10:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container11 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text4 {
            color: #e2a1a1;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
          }
          .container12 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .link4 {
            display: contents;
          }
          .container13 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: c;
            transition: 0.3s;
            align-items: center;
            border-color: #e8d075;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #fffce8;
          }
          .container13:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container14 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text5 {
            color: #E8D075;
            font-size: 1.6rem;
            font-style: normal;
            font-family: Righteous;
            font-weight: 400;
          }
          .link5 {
            display: contents;
          }
          .container15 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #7e6892;
            border-width: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
            background-color: #d0d0ea;
          }
          .container15:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .container16 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text6 {
            color: #7E6892;
            font-size: 1.5rem;
            font-style: normal;
            font-family: Carter One;
            font-weight: 400;
            text-transform: uppercase;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container01 {
              max-width: 960px;
            }
            .card {
              width: 100%;
              height: 458px;
            }
            .text1 {
              text-align: center;
            }
            .text2 {
              text-align: center;
            }
            .text3 {
              text-align: center;
            }
            .text4 {
              text-align: center;
            }
            .text5 {
              text-align: center;
            }
            .text6 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              height: 519px;
            }
            .card {
              top: 65px;
              left: 0px;
              width: 100%;
              height: 394px;
              position: absolute;
              align-items: center;
            }
            .text {
              width: auto;
              height: auto;
              display: none;
            }
            .container03 {
              width: auto;
            }
            .text1 {
              font-size: 1.3rem;
            }
            .container05 {
              width: auto;
            }
            .text2 {
              font-size: 1.3rem;
            }
            .container08 {
              width: auto;
            }
            .text3 {
              font-size: 1.3rem;
            }
            .container10 {
              width: auto;
            }
            .text4 {
              font-size: 1.3rem;
            }
            .container13 {
              width: 185px;
            }
            .text5 {
              width: 165px;
              font-size: 1.3rem;
            }
            .container15 {
              width: auto;
            }
            .text6 {
              font-size: 1.3rem;
            }
          }
          @media (max-width: 479px) {
            .hero {
              height: 492px;
            }
            .container01 {
              width: 416px;
              height: 845px;
            }
            .card {
              top: 62px;
              right: 0px;
              width: 100%;
              height: 367px;
              padding: var(--dl-space-space-unit);
              position: absolute;
              align-self: flex-start;
            }
            .text {
              display: none;
            }
            .container02 {
              width: auto;
              height: auto;
            }
            .container03 {
              height: auto;
            }
            .text1 {
              font-size: 1.2rem;
            }
            .container05 {
              width: auto;
              height: auto;
            }
            .text2 {
              font-size: 1.2rem;
            }
            .container07 {
              width: auto;
              height: auto;
            }
            .container08 {
              width: 199px;
              height: 68px;
            }
            .text3 {
              font-size: 1.2rem;
            }
            .container10 {
              width: 90px;
              height: auto;
            }
            .text4 {
              font-size: 1.2rem;
            }
            .container12 {
              width: auto;
              height: auto;
            }
            .container13 {
              width: 149px;
              height: auto;
            }
            .text5 {
              font-size: 1.2rem;
            }
            .container15 {
              height: auto;
            }
            .text6 {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Projetos
