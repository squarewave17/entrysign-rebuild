<template>
  <Header msg="Start" />
  <navBar />

  <div class="of-container">
    <h4 class="of-text-weight-bold">
      So that we can build your system, we need some information to create your
      solution.
    </h4>
    <p>Are you a single organisation or part of a multi-academy trust?</p>
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
  <BasicDetails />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BasicDetails from "@/components/BasicDetails.vue";

import ImgRadio from "@/components/ImgRadio.vue";

export default {
  name: "Start",
  components: {
    Header,
    navBar,
    BasicDetails,

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
