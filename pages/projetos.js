import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Ttulo from '../components/ttulo'
import Fundo from '../components/fundo'

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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/b661a600-36d1-40ec-9b48-e5707187c246?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div className="projetos-hero">
          <div className="projetos-container01">
            <div className="projetos-card">
              <Ttulo
                heading="PROJETOS"
                rootClassName="ttulo-root-class-name4"
              ></Ttulo>
              <h1 className="projetos-text">Feitos com carinho</h1>
              <div className="projetos-container02">
                <Link href="/codicesoturno">
                  <a className="projetos-link">
                    <div className="projetos-container03">
                      <div className="projetos-container04">
                        <h1 className="projetos-text01">
                          CÓDICE
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/mirrorveins">
                  <a className="projetos-link1">
                    <div className="projetos-container05">
                      <div className="projetos-container06">
                        <h1 className="projetos-text02">MIRROR VEINS</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="projetos-container07">
                  <div className="projetos-container08">
                    <h1 className="projetos-text03">X</h1>
                  </div>
                </div>
              </div>
              <div className="projetos-container09">
                <Link href="/narcisogelado">
                  <a className="projetos-link2">
                    <div className="projetos-container10">
                      <div className="projetos-container11">
                        <h1 className="projetos-text04">NARCISO</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/darkstories">
                  <a className="projetos-link3">
                    <div className="projetos-container12">
                      <div className="projetos-container13">
                        <h1 className="projetos-text05">Dark Stories</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="projetos-container14">
                  <div className="projetos-container15">
                    <h1 className="projetos-text06">X</h1>
                  </div>
                </div>
              </div>
              <div className="projetos-container16">
                <Link href="/humanity">
                  <a className="projetos-link4">
                    <div className="projetos-container17">
                      <div className="projetos-container18">
                        <h1 className="projetos-text07">H:UMANITY</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/hysax">
                  <a className="projetos-link5">
                    <div className="projetos-container19">
                      <div className="projetos-container20">
                        <h1 className="projetos-text08">HYSAX</h1>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/crcctd">
                  <a className="projetos-link6">
                    <div className="projetos-container21">
                      <div className="projetos-container22">
                        <h1 className="projetos-text09">CRCCTD</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="fundo-root-class-name"></Fundo>
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
            height: 694px;
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
          .projetos-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .projetos-link {
            display: contents;
          }
          .projetos-container03 {
            width: 262px;
            height: 68px;
            display: flex;
            opacity: 1;
            grid-area: a;
            transition: 0.3s;
            align-items: center;
            border-color: #ea885e;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container03:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container04 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #e4092a;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text01 {
            color: #ea885e;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
          }
          .projetos-link1 {
            display: contents;
          }
          .projetos-container05 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: f;
            transition: 0.3s;
            align-items: center;
            border-color: #bdbdd4;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container05:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container06 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text02 {
            color: #bdbdd4;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
          }
          .projetos-container07 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #b0b0bd;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
          }
          .projetos-container07:hover {
            cursor: progress;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container08 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .projetos-text03 {
            color: #b0b0bd;
            font-size: 1.5rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 800;
          }
          .projetos-container09 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .projetos-link2 {
            display: contents;
          }
          .projetos-container10 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: c;
            transition: 0.3s;
            align-items: center;
            border-color: #e8d075;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container10:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container11 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            padding-right: 32px;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text04 {
            color: #e8d075;
            width: 222px;
            font-size: 2rem;
            font-style: normal;
            text-align: center;
            font-family: NMSGeoSans;
            font-weight: 700;
          }
          .projetos-link3 {
            display: contents;
          }
          .projetos-container12 {
            width: 262px;
            height: 68px;
            display: flex;
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
          .projetos-container12:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container13 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text05 {
            color: #7e6892;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
            text-transform: uppercase;
          }
          .projetos-container14 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: center;
            border-color: #b0b0bd;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
          }
          .projetos-container14:hover {
            cursor: progress;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container15 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text06 {
            color: #b0b0bd;
            font-size: 1.5rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 800;
          }
          .projetos-container16 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .projetos-link4 {
            display: contents;
          }
          .projetos-container17 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: b;
            transition: 0.3s;
            align-items: center;
            border-color: #5198a6;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container17:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container18 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text07 {
            color: #5198a6;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
          }
          .projetos-link5 {
            display: contents;
          }
          .projetos-container19 {
            width: 262px;
            height: 68px;
            display: flex;
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
          .projetos-container19:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container20 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .projetos-text08 {
            color: #e2a1a1;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
          }
          .projetos-link6 {
            display: contents;
          }
          .projetos-container21 {
            width: 262px;
            height: 68px;
            display: flex;
            grid-area: d;
            transition: 0.3s;
            align-items: center;
            border-color: #798c69;
            border-width: 3px;
            margin-right: 10px;
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: 10px;
            flex-direction: column;
            text-decoration: none;
          }
          .projetos-container21:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.03);
          }
          .projetos-container22 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 1rem;
            justify-content: center;
          }
          .projetos-text09 {
            color: #798c69;
            font-size: 2rem;
            font-style: normal;
            font-family: NMSGeoSans;
            font-weight: 700;
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
              height: 458px;
            }
            .projetos-text01 {
              text-align: center;
            }
            .projetos-text02 {
              text-align: center;
            }
            .projetos-text03 {
              text-align: center;
            }
            .projetos-text04 {
              text-align: center;
            }
            .projetos-text05 {
              text-align: center;
            }
            .projetos-text06 {
              text-align: center;
            }
            .projetos-text07 {
              text-align: center;
            }
            .projetos-text08 {
              text-align: center;
            }
            .projetos-text09 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .projetos-hero {
              height: 519px;
            }
            .projetos-card {
              top: 65px;
              left: 0px;
              width: 100%;
              height: 394px;
              position: absolute;
              align-items: center;
            }
            .projetos-text {
              width: auto;
              height: auto;
              display: none;
            }
            .projetos-container03 {
              width: auto;
            }
            .projetos-text01 {
              font-size: 1.3rem;
            }
            .projetos-container05 {
              width: auto;
            }
            .projetos-text02 {
              font-size: 1.3rem;
            }
            .projetos-container07 {
              width: auto;
            }
            .projetos-text03 {
              font-size: 1.3rem;
            }
            .projetos-container10 {
              width: 185px;
            }
            .projetos-text04 {
              width: 165px;
              font-size: 1.3rem;
            }
            .projetos-container12 {
              width: auto;
            }
            .projetos-text05 {
              font-size: 1.3rem;
            }
            .projetos-container14 {
              width: auto;
            }
            .projetos-text06 {
              font-size: 1.3rem;
            }
            .projetos-container17 {
              width: auto;
            }
            .projetos-text07 {
              font-size: 1.3rem;
            }
            .projetos-container19 {
              width: auto;
            }
            .projetos-text08 {
              font-size: 1.3rem;
            }
            .projetos-container21 {
              width: auto;
            }
            .projetos-text09 {
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
              top: 62px;
              right: 0px;
              width: 100%;
              height: 367px;
              padding: var(--dl-space-space-unit);
              position: absolute;
              align-self: flex-start;
            }
            .projetos-text {
              display: none;
            }
            .projetos-container02 {
              width: auto;
              height: auto;
            }
            .projetos-container03 {
              height: auto;
            }
            .projetos-text01 {
              font-size: 1.2rem;
            }
            .projetos-container05 {
              width: auto;
              height: auto;
            }
            .projetos-text02 {
              font-size: 1.2rem;
            }
            .projetos-container07 {
              height: auto;
            }
            .projetos-text03 {
              font-size: 1.2rem;
            }
            .projetos-container09 {
              width: auto;
              height: auto;
            }
            .projetos-container10 {
              width: 149px;
              height: auto;
            }
            .projetos-text04 {
              font-size: 1.2rem;
            }
            .projetos-container12 {
              height: auto;
            }
            .projetos-text05 {
              font-size: 1.2rem;
            }
            .projetos-container14 {
              height: auto;
            }
            .projetos-text06 {
              font-size: 1.2rem;
            }
            .projetos-container16 {
              width: auto;
              height: auto;
            }
            .projetos-container17 {
              width: 199px;
              height: 68px;
            }
            .projetos-text07 {
              font-size: 1.2rem;
            }
            .projetos-container19 {
              width: 90px;
              height: auto;
            }
            .projetos-text08 {
              font-size: 1.2rem;
            }
            .projetos-container21 {
              width: 90px;
              height: auto;
            }
            .projetos-text09 {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Projetos
