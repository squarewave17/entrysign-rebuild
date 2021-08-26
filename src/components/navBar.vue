<template>
  <div id="nav">
    <router-link :to="{ name: 'Start' }">Start</router-link> >
    <router-link :to="{ name: 'Details' }">Details</router-link> >
    <router-link :to="{ name: 'Hardware' }">Hardware</router-link> >
    <router-link :to="{ name: 'Customise' }">Customise</router-link> >
    <router-link :to="{ name: 'Additional Entry Points' }"
      >Additional Entry Points</router-link
    >
    >
    <router-link :to="{ name: 'Access Door Control' }"
      >Access Door Control</router-link
    >
    >
    <router-link :to="{ name: 'Infection Control Package' }"
      >Infection Control Package</router-link
    >
    >
    <router-link :to="{ name: 'Product Addons' }">Product Addons</router-link> >
    <router-link :to="{ name: 'Summary' }">Summary</router-link>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>
