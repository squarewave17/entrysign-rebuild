<template>
  <div class="img-link">
    <router-link :to="this.route"
      ><div>
        <img :src="require(`@/assets/${image}`)" />
        <h3>{{ this.label }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    image: {
      type: String,
    },
    route: {
      type: String,
    },
  },
};
</script>

<style scoped>
.img-link {
  background-color: #fff;
  border-radius: 10px;
}
.img-link:hover {
  background-color: var(--of-light);
}
</style>
