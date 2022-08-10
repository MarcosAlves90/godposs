<template>
  <div class="place-holder-container" v-bind:class="rootClassName">
    <button class="place-holder-button button buttonSmall">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'PlaceHolder',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.place-holder-container {
  display: flex;
  position: relative;
}
.place-holder-button {
  color: var(--dl-color-gray-white);
  opacity: 0;
  outline: none;
  background: #e4092a;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 0px;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}

</style>
