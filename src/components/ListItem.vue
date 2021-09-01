<template>
  <div class="of-pb-5">
    <img :src="require(`@/assets/${icon}`)" />
    <h6 class="of-text-uppercase of-text-bold">{{ text }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Image,
      default: "",
    },
    text: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
img {
  max-width: 40px;
  margin-right: 10px;
}
h6 {
  margin: 0;
}
</style>
