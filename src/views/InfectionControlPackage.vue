<template>
  <Header msg="Infection Control Package" />
  <navBar />
  <div class="of-container">
    <div class="of-flex of-flex-center">
      <BaseRadio v-model="info.icpNo" value="Multi" name="icp" label="No" />
      <BaseRadio v-model="info.icpYes" value="desk" name="icp" label="yes" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseRadio from "@/components/BaseRadio.vue";

export default {
  name: "ICP",
  components: {
    Header,
    navBar,
    BaseRadio,
  },
  data() {
    return {
      info: {
        icpNo: "",
        icpYes: "",
      },
    };
  },
};
</script>
