<template>
  <div class="fundo-container" v-bind:class="rootClassName">
    <img
      :alt="image_alt1"
      :src="image_src1"
      loading="eager"
      class="fundo-image"
    />
    <img :alt="image_alt" :src="image_src" loading="eager" class="fundo-image1" />
  </div>
</template>

<script>
export default {
  name: 'Fundo',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/avoid-200h.jpg',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://i0.wp.com/www.toppapeldeparede.com.br/wp-content/uploads/2021/04/Image-about-aesthetic-in-Wallpaper-by.png?w=640&ssl=1',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.fundo-container {
  display: flex;
  position: relative;
}
.fundo-image {
  top: 0px;
  flex: inherit;
  left: left;
  right: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  position: fixed;
  object-fit: cover;
  object-position: right;
}
.fundo-image1 {
  top: 0px;
  flex: inherit;
  left: left;
  right: 0px;
  width: 902px;
  height: 100%;
  opacity: 0.5;
  position: fixed;
  object-fit: cover;
  object-position: right;
  border-bottom-left-radius: 10rem;
}










@media(max-width: 767px) {
  .fundo-root-class-name2 {
    opacity: 1;
  }
}
@media(max-width: 479px) {
  .fundo-root-class-name2 {
    display: flex;
  }
}
</style>
