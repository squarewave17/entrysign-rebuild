<template>
  <div
    class="app-button"
    :style="{
      backgroundColor: this.$store.getters.themeColour,
    }"
  >
    dd
  </div>
</template>

<script>
export default {
  name: "AppButton",
  data() {
    return {};
  },
};
</script>

<style scoped>
.app-button {
  width: 100%;
  height: 50px;
  margin: 20px 0;
}
</style>
