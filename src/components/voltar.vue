<template>
  <div class="voltar-container" v-bind:class="rootClassName">
    <router-link to="/projetos" class="voltar-navlink button">
      {{ button }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Voltar',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.voltar-container {
  display: flex;
  position: relative;
}
.voltar-navlink {
  color: #bf8787;
  outline: none;
  font-size: 0.8rem;
  background: #bf8787;
  font-style: normal;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 1.4;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-color: #bf8787;
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
.voltar-navlink:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.1);
}



</style>
