<template>
  <div class="buto2-container">
    <button class="buto2-button button buttonSmall">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Buto2',
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
.buto2-container {
  display: flex;
  position: relative;
}
.buto2-button {
  color: var(--dl-color-gray-white);
  outline: none;
  background: #e4092a;
  transition: 0.3s;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 0px;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.buto2-button:hover {
  cursor: pointer;
  opacity: 0.5;
  transform: scale(1.1);
}
</style>
