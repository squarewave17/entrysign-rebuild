<template>
  <div id="nav">
    <router-link :to="{ name: 'Start' }">Start</router-link><span>></span>
    <router-link :to="{ name: 'Hardware' }">Hardware</router-link
    ><span>></span>
    <router-link :to="{ name: 'Customise' }">Customise</router-link
    ><span>></span>
    <router-link :to="{ name: 'Additional Entry Points' }"
      >Additional Entry Points</router-link
    ><span>></span>
    <router-link :to="{ name: 'Access Door Control' }"
      >Access Door Control</router-link
    ><span>></span>
    <router-link :to="{ name: 'Infection Control Package' }"
      >Infection Control Package</router-link
    ><span>></span>
    <router-link :to="{ name: 'Product Addons' }">Product Addons</router-link
    ><span>></span>
    <router-link :to="{ name: 'Summary' }">Summary</router-link>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
span {
  font-size: 17px;
  font-weight: bold;
  color: var(--of-dark-ac);
  padding: 5px;
}
</style>
