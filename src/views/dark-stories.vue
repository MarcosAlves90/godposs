<template>
  <div class="dark-stories-container">
    <app-header></app-header>
    <div class="dark-stories-hero">
      <div class="dark-stories-container1">
        <div class="dark-stories-card">
          <app-ttulo
            heading="DARK STORIES"
            rootClassName="ttulo-root-class-name6"
          ></app-ttulo>
          <h1 class="dark-stories-text">
            &quot;A energia é um encanto eterno&quot;
          </h1>
          <span class="dark-stories-text1">
            <span>
              Inspirado nos universos da Marvel e DC Comics, Dark Stories é o nome
              de um imenso compilado de histórias conectadas que provavelmente
              resultarão em livros separados, ou até mesmo em um mangá.
              &quot;Homega: O escolhido&quot; é a história principal que também
              serve de base para as outras, e vem sendo desenvolvida há bastante
              tempo.
            </span>
          </span>
          <app-voltar
            button="Voltar"
            rootClassName="voltar-root-class-name1"
          ></app-voltar>
        </div>
      </div>
      <app-fundo rootClassName="fundo-root-class-name5"></app-fundo>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppTtulo from '../components/ttulo'
import AppVoltar from '../components/voltar'
import AppFundo from '../components/fundo'

export default {
  name: 'DarkStories',
  components: {
    AppHeader,
    AppTtulo,
    AppVoltar,
    AppFundo,
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
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(51, 48, 48, 0.8);
}
.dark-stories-text {
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
@media(max-width: 991px) {
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
@media(max-width: 767px) {
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
@media(max-width: 479px) {
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
</style>
