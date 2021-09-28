<template>
  <div class="page-container">
    <Header msg="Product Addons" />
    <navBar />
    <div>
      <router-link to="/product-addons/entrysign-addons"
        >Entrysign Addons</router-link
      ><span>></span>
      <router-link to="/product-addons/fobs-and-tokens"
        >Fobs and Tokens</router-link
      ><span>></span>
      <router-link to="/product-addons/terminals">Terminals</router-link
      ><span>></span>
      <router-link to="/product-addons/labels-cards"
        >Labels and Cards</router-link
      ><span>></span>
      <router-link to="/product-addons/id-cards">Id Cards & Holders</router-link
      ><span>></span>
      <router-link to="/product-addons/lanyards">LAnyards & YoYo's</router-link
      ><span>></span>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import navBar from '@/components/navBar.vue'

export default {
  name: 'Home',
  components: {
    Header,
    navBar,
  },
  data() {
    return {}
  },
}
</script>

<style>
span {
  font-size: 17px;
  font-weight: bold;
  color: var(--of-dark-ac);
  padding: 5px;
}
</style>
