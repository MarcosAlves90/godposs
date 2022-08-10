<template>
  <div class="doomsday-glock-container">
    <app-header></app-header>
    <div class="doomsday-glock-hero">
      <div class="doomsday-glock-container1">
        <div class="doomsday-glock-card">
          <app-ttulo
            heading="THE DOOMSDAY GLOCK"
            rootClassName="ttulo-root-class-name8"
          ></app-ttulo>
          <h1 class="doomsday-glock-text">
            &quot;Você parece preso em um loop&quot;
          </h1>
          <span class="doomsday-glock-text1">
            <span class="doomsday-glock-text2">The Doomsday Glock</span>
            <span>
              é o nome de um jogo criado para uma atividade escolar, mas que
              acabou se mostrando com muito potencial. No jogo você é o
              &quot;número dois&quot; e está preso em um tipo de loop temporal,
              para escapar disso será necessário multiplicar e somar suas
              habilidades, além de derrotar seus inimigos é claro. Futuras
              atualizações podem revelar fragmentos de sua verdadeira história.
            </span>
            <br />
            <span>
              O jogo é atualmente desenvolvido por mim, mas inicialmente tive
              ajuda da equipe do
              <span v-html="rawf3n6"></span>
            </span>
            <a
              href="https://twitter.com/DiseeObserva"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span class="doomsday-glock-text5">Disee</span>
            </a>
            <span>
              .
              <span v-html="rawjy5v"></span>
            </span>
            <br />
            <span>
              Mais informações e downloads do jogo podem ser encontrados em sua
              página.
            </span>
          </span>
          <div class="doomsday-glock-container2">
            <router-link to="/projetos" class="doomsday-glock-navlink">
              <app-voltar
                button="Voltar"
                class="doomsday-glock-component2"
              ></app-voltar>
            </router-link>
            <a
              href="https://dakusturoi.itch.io/doomsday-glock"
              target="_blank"
              rel="noreferrer noopener"
              class="doomsday-glock-link1 button"
            >
              <span class="doomsday-glock-text8">Página do jogo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <app-fundo rootClassName="fundo-root-class-name9"></app-fundo>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppTtulo from '../components/ttulo'
import AppVoltar from '../components/voltar'
import AppFundo from '../components/fundo'

export default {
  name: 'DoomsdayGlock',
  components: {
    AppHeader,
    AppTtulo,
    AppVoltar,
    AppFundo,
  },

  data() {
    return {
      rawf3n6: ' ',
      rawjy5v: ' ',
    }
  },

  metaInfo: {
    title: 'God Poseidon',
    meta: [
      {
        name: 'description',
        content:
          'Um portfólio do Via Charisma. Entre e veja alguns projetos interessantes.',
      },
      {
        property: 'og:title',
        content: 'God Poseidon',
      },
      {
        property: 'og:description',
        content:
          'Um portfólio do Via Charisma. Entre e veja alguns projetos interessantes.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bfa02ed4-99f1-45f1-89bb-b0162fa97bf3/b661a600-36d1-40ec-9b48-e5707187c246?org_if_sml=1',
      },
    ],
  },
}
</script>

<style scoped>
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
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(51, 48, 48, 0.8);
}
.doomsday-glock-text {
  color: #ffffff;
  font-size: 2.00rem;
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
.doomsday-glock-navlink {
  display: contents;
}
.doomsday-glock-component2 {
  text-decoration: none;
}
.doomsday-glock-link1 {
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
.doomsday-glock-link1:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.1);
}
.doomsday-glock-text8 {
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
}
@media(max-width: 991px) {
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
@media(max-width: 767px) {
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
@media(max-width: 479px) {
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
</style>
