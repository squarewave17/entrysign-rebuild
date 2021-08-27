<template>
  <Header msg="Start" />
  <navBar />
  <div class="of-container">
    <BaseRadio
      v-model="info.orgSize"
      value="Single"
      label="Single"
      name="start"
      @click="updateOrgSize"
    />
    <BaseRadio
      v-model="info.orgSize"
      value="Multi"
      label="Multi"
      name="start"
      @click="updateOrgSize"
    />
    <div>{{ this.info.orgSize }}</div>
    <div>{{ this.$store.state.orgSize }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseRadio from "@/components/BaseRadio.vue";

export default {
  name: "Start",
  components: {
    Header,
    navBar,
    BaseRadio,
  },
  data() {
    return {
      info: {
        orgSize: "",
      },
    };
  },
  methods: {
    updateOrgSize(e) {
      console.log("triggered");
      this.$store.commit("updateOrgSize", e.target.value);
    },
  },
};
</script>

<style scoped></style>
