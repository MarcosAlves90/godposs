<template>
  <div data-role="Header" class="header-header" v-bind:class="rootClassName">
    <nav class="header-nav">
      <div class="header-container">
        <router-link to="/" class="header-navlink">Poseidon</router-link>
        <div class="header-menu">
          <router-link to="/" class="header-navlink1">Início</router-link>
          <router-link to="/projetos" class="header-link">
            <span>Projetos</span>
          </router-link>
        </div>
        <div class="header-container1">
          <div class="header-container2">
            <place-holder
              rootClassName="place-holder-root-class-name"
            ></place-holder>
          </div>
          <div data-type="BurgerMenu" class="header-burger-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div data-type="MobileMenu" class="header-mobile-menu">
      <div class="header-top">
        <router-link to="/incio" class="header-navlink2">Poseidon</router-link>
        <div data-type="CloseMobileMenu" class="header-close-menu">
          <svg viewBox="0 0 1024 1024" class="header-icon2">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu1">
          <router-link to="/incio" class="header-navlink3">Início</router-link>
          <router-link to="/projetos" class="header-navlink4">
            Projetos
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceHolder from './place-holder'

export default {
  name: 'Header',
  props: {
    rootClassName: String,
  },
  components: {
    PlaceHolder,
  },
}
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius1);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: rgba(51, 48, 48, 0.8);
}
.header-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink {
  color: #ffffff;
  font-size: 1.3rem;
  transition: 0.3s;
  font-family: NMSFuturaProBook;
  font-weight: 800;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  letter-spacing: -0.025rem;
  text-transform: uppercase;
  text-decoration: none;
}
.header-navlink:hover {
  color: #c19696;
  cursor: pointer;
  transform: scale(1.1);
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.header-navlink1 {
  color: #ffffff;
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-navlink1:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.header-link {
  color: #ffffff;
  font-size: 1rem;
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-link:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.header-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-icon {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
}
.header-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 761px;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.header-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink2 {
  color: var(--dl-color-secondary-700);
  font-size: 2rem;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon2 {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-navlink3 {
  font-size: 1.5rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-navlink3:hover {
  transform: scale(1.2);
}
.header-navlink4 {
  font-size: 1.5rem;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 400;
  margin-bottom: var(--dl-space-space-halfunit);
  letter-spacing: -0.025rem;
  text-transform: none;
  text-decoration: none;
}
.header-navlink4:hover {
  transform: scale(1.2);
}
@media(max-width: 991px) {
  .header-nav {
    max-width: 960px;
  }
}
@media(max-width: 767px) {
  .header-menu {
    display: none;
  }
  .header-burger-menu {
    display: flex;
  }
  .header-icon {
    fill: #ffffff;
  }
  .header-mobile-menu {
    display: none;
  }
}
@media(max-width: 479px) {
  .header-container2 {
    display: none;
  }
  .header-icon {
    fill: #ffffff;
  }
  .header-mobile-menu {
    display: none;
  }
}
</style>
