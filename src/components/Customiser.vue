<template>
  <div class="of-container customizer-container of-flex">
    <div class="customiser-half of-flex of-flex-center of-flex-column">
      <img
        style="width: 50%; margin: auto"
        src="@/assets/EntrySignBlackcopy.png"
      />
      <div>
        <h1>Welcome</h1>
        <h2>Please Select an Option</h2>
      </div>
    </div>
    <div class="customiser-half">
      <div class="button-container">
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "Customiser",
  components: {
    AppButton,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.button-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.customiser-half {
  width: 50%;
  margin: 10px;
  background: var(--of-light);
  padding: 50px 80px;
}
</style>
