import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Fundo from '../components/fundo'

const Incio = (props) => {
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/32bcf009-ddcf-42b2-ba4f-ec95d91e28de?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div className="hero">
          <div className="container1">
            <div className="card">
              <h1 className="text">God Poseidon</h1>
              <h1 className="text1">&quot;Tem algo que não se encaixa&quot;</h1>
              <span className="text2">
                <span>
                  Olá, sou aquele que muitos chamam de Via. Eu sempre tive
                  muitos projetos, mas eu nunca apresentei eles para as pessoas,
                  então quando eu percebi isso, resolvi fazer um
                  &quot;portfólio&quot; para apresentá-los, e bom, o resultado
                  foi esse site que você está vendo. Eu tenho muito carinho por
                  cada um desses sonhos que eu chamo de projetos, então espero
                  que as pessoas, quando souberem o intuito de cada um, se
                  interessem pelo menos um pouco por eles.
                </span>
              </span>
              <h1 className="text4">Anotações</h1>
              <h1 className="text5">&quot;Nós costumávamos conversar&quot;</h1>
              <span className="text6">
                09/03/22 &gt; Preciso continuar escrevendo as histórias do
                projeto Dark Stories, mas não sei como continuar.
              </span>
              <div className="container2">
                <a
                  href="https://twitter.com/PanWHoney"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link"
                >
                  <svg viewBox="0 0 950.8571428571428 1024" className="icon">
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCLL0KtW0kFO8qCcc5EmZE8w"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link1"
                >
                  <svg viewBox="0 0 1024 1024" className="icon2">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.twitch.tv/homegatro"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link2"
                >
                  <svg viewBox="0 0 1024 1024" className="icon4">
                    <path d="M512 248v248h-82.857v-248h82.857zM739.429 248v248h-82.857v-248h82.857zM739.429 682.286l144.571-145.143v-454.286h-682.286v599.429h186.286v124l124-124h227.429zM966.857 0v578.857l-248 248h-186.286l-124 124h-124v-124h-227.429v-661.714l62.286-165.143h847.429z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Fundo rootClassName="rootClassName2"></Fundo>
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
            align-items: flex-end;
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
            margin-top: 200px;
            align-items: flex-start;
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .text {
            color: #ff6900;
            font-size: 3.25rem;
            text-align: center;
            font-family: Righteous;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #73cb6e;
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
          .text4 {
            color: #e81d24;
            font-size: 3.25rem;
            text-align: center;
            font-family: Righteous;
            font-weight: 700;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
            background-color: #73cb6e;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text5 {
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
          .text6 {
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
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .link {
            display: contents;
          }
          .icon {
            fill: #73cb6e;
            width: 90px;
            height: 80px;
            align-self: stretch;
            transition: 0.3s;
            text-decoration: none;
          }
          .icon:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .link1 {
            display: contents;
          }
          .icon2 {
            fill: #73cb6e;
            width: 90px;
            height: 80px;
            transition: 0.3s;
            text-decoration: none;
          }
          .icon2:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
          }
          .link2 {
            display: contents;
          }
          .icon4 {
            fill: #73cb6e;
            width: 90px;
            height: 80px;
            transition: 0.3s;
            text-decoration: none;
          }
          .icon4:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.1);
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
              height: 735px;
            }
            .card {
              top: 65px;
              right: 0px;
              position: absolute;
              margin-top: 30px;
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
            .text4 {
              font-size: 3.1rem;
            }
            .text5 {
              display: none;
            }
            .text6 {
              font-size: 1.1rem;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero {
              width: 100%;
              height: 839px;
            }
            .container1 {
              height: 809px;
            }
            .card {
              top: 117px;
              flex: 1;
              left: 0px;
              width: 100%;
              height: auto;
              margin: auto;
              padding: var(--dl-space-space-unit);
              position: absolute;
            }
            .text {
              font-size: 3rem;
            }
            .text1 {
              display: none;
            }
            .text2 {
              font-size: 1rem;
              text-align: left;
            }
            .text4 {
              font-size: 3rem;
            }
            .text6 {
              text-align: left;
            }
            .icon {
              width: auto;
            }
            .icon2 {
              width: auto;
            }
            .icon4 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Incio
