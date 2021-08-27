<template>
  <Header msg="Start" />
  <navBar />

  <div class="of-container">
    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="info.orgSize"
        value="Single"
        label="Single"
        name="start"
        img="OrganisationMan.png"
        @click="updateOrgSize"
      />
      <ImgRadio
        v-model="info.orgSize"
        value="Multi"
        label="Multi"
        name="start"
        img="Organisation2.png"
        @click="updateOrgSize"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";

import ImgRadio from "@/components/ImgRadio.vue";

export default {
  name: "Start",
  components: {
    Header,
    navBar,

    ImgRadio,
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
