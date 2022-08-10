<template>
  <div class="ttulo-container" v-bind:class="rootClassName">
    <h1 class="ttulo-text">{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Ttulo',
  props: {
    rootClassName: String,
    heading: {
      type: String,
      default: 'H:Umanity',
    },
  },
}
</script>

<style scoped>
.ttulo-container {
  display: flex;
  position: relative;
}
.ttulo-text {
  color: #e81d24;
  font-size: 3.25rem;
  text-align: center;
  font-family: NMSFuturaProBook;
  font-weight: 700;
  line-height: 1.3;
  text-transform: none;
  text-decoration: none;
  background-color: #bf8787;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}









@media(max-width: 991px) {
  .ttulo-root-class-name2 {
    align-self: center;
  }
}
@media(max-width: 767px) {
  .ttulo-text {
    font-size: 3.1rem;
  }
}
@media(max-width: 479px) {
  .ttulo-text {
    font-size: 3rem;
  }
}
</style>
