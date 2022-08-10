<template>
  <div class="projetos-container">
    <div class="projetos-hero">
      <div class="projetos-container1">
        <div class="projetos-card">
          <app-ttulo
            heading="PROJETOS"
            rootClassName="ttulo-root-class-name4"
          ></app-ttulo>
          <h1 class="projetos-text">Feitos com carinho</h1>
          <div class="projetos-container2">
            <router-link to="/dark-stories" class="projetos-navlink">
              <div class="projetos-container3">
                <div class="projetos-container4">
                  <h1 class="projetos-text1">Dark Stories</h1>
                </div>
              </div>
            </router-link>
            <router-link to="/hysax" class="projetos-navlink1">
              <div class="projetos-container5">
                <div class="projetos-container6">
                  <h1 class="projetos-text2">HYSAX</h1>
                </div>
              </div>
            </router-link>
            <router-link to="/doomsday-glock" class="projetos-navlink2">
              <div class="projetos-container7">
                <div class="projetos-container8">
                  <h1 class="projetos-text3">DOOMSDAY GLOCK</h1>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <app-fundo rootClassName="fundo-root-class-name"></app-fundo>
    <app-header></app-header>
  </div>
</template>

<script>
import AppTtulo from '../components/ttulo'
import AppFundo from '../components/fundo'
import AppHeader from '../components/header'

export default {
  name: 'Projetos',
  components: {
    AppTtulo,
    AppFundo,
    AppHeader,
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
.projetos-container1 {
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
  width: 996px;
  bottom: 250px;
  height: 302px;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  position: absolute;
  align-self: flex-start;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  align-items: flex-start;
  padding-left: 3rem;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(51, 48, 48, 0.8);
}
.projetos-text {
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
.projetos-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.projetos-navlink {
  display: contents;
}
.projetos-container3 {
  width: 262px;
  height: 68px;
  display: flex;
  grid-area: e;
  transition: 0.3s;
  align-items: center;
  border-color: #7E6892;
  border-width: 3px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-radius1);
  margin-bottom: 10px;
  flex-direction: column;
  text-decoration: none;
}
.projetos-container3:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.03);
}
.projetos-container4 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.projetos-text1 {
  color: #7E6892;
  width: 248px;
  font-size: 2rem;
  font-style: normal;
  text-align: center;
  font-family: NMSFuturaProBook;
  font-weight: 700;
  text-transform: uppercase;
}
.projetos-navlink1 {
  display: contents;
}
.projetos-container5 {
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
.projetos-container5:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.03);
}
.projetos-container6 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.projetos-text2 {
  color: #e2a1a1;
  font-size: 2rem;
  font-style: normal;
  text-align: center;
  font-family: NMSFuturaProBook;
  font-weight: 700;
}
.projetos-navlink2 {
  display: contents;
}
.projetos-container7 {
  width: 262px;
  height: 68px;
  display: flex;
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
.projetos-container7:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.03);
}
.projetos-container8 {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  justify-content: center;
}
.projetos-text3 {
  color: #07c0d0;
  font-size: 1.6rem;
  font-style: normal;
  font-family: NMSFuturaProBook;
  font-weight: 800;
}
@media(max-width: 991px) {
  .projetos-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .projetos-container1 {
    max-width: 960px;
  }
  .projetos-card {
    width: 100%;
    height: 458px;
  }
  .projetos-text1 {
    text-align: center;
  }
  .projetos-text2 {
    text-align: center;
  }
  .projetos-text3 {
    text-align: center;
  }
}
@media(max-width: 767px) {
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
  .projetos-container3 {
    width: auto;
  }
  .projetos-text1 {
    font-size: 1.3rem;
  }
  .projetos-container5 {
    width: auto;
  }
  .projetos-text2 {
    font-size: 1.3rem;
  }
  .projetos-container7 {
    width: auto;
  }
  .projetos-text3 {
    font-size: 1.3rem;
  }
}
@media(max-width: 479px) {
  .projetos-hero {
    height: 492px;
  }
  .projetos-container1 {
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
  .projetos-container2 {
    width: auto;
    height: auto;
  }
  .projetos-container3 {
    height: auto;
  }
  .projetos-text1 {
    font-size: 1.2rem;
  }
  .projetos-container5 {
    width: 90px;
    height: auto;
  }
  .projetos-text2 {
    font-size: 1.2rem;
  }
  .projetos-container7 {
    height: auto;
  }
  .projetos-text3 {
    font-size: 1.2rem;
  }
}
</style>
