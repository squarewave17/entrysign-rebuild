<template>
  <div class="of-container of-py-6 ac-nav-container">
    <ImgLink
      label="Entrysign Add-ons"
      image="entryadd.png"
      route="/product-addons/entrysign-addons"
    />
    <ImgLink
      label="Fobs & Tokens"
      image="fobs-tokens.png"
      route="/product-addons/fobs-and-tokens"
    />
    <ImgLink
      label="Terminals"
      image="terminal.png"
      route="/product-addons/terminals"
    />
    <ImgLink
      label="Labels & Buisiness Cards"
      image="labels-cards.png"
      route="/product-addons/labels-cards"
    />
    <ImgLink
      label="ID Cards & Holders"
      image="id-cards.png"
      route="/product-addons/id-cards"
    />
    <ImgLink
      label="Lanyards & Yo-Yo Reels"
      image="lanyard.png"
      route="/product-addons/lanyards"
    />
  </div>
</template>

<script>
import ImgLink from '@/components/ImgLink.vue'

export default {
  components: {
    ImgLink,
  },
}
</script>

<style scoped>
.ac-nav-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
