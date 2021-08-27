<template>
  <Header msg="Hardware" />
  <navBar />
  <div class="of-container">
    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="info.hardwareOption"
        value="Desk Mount"
        label="Desk Mount"
        name="hardware"
        img="deskmount.png"
        @click="updateHardwareType"
      />
      <ImgRadio
        v-model="info.hardwareOption"
        value="Wall Mount"
        label="Wall Mount"
        name="hardware"
        img="wallmount.png"
        @click="updateHardwareType"
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
  name: "Hardware",
  components: {
    Header,
    navBar,
    ImgRadio,
  },
  data() {
    return {
      info: {
        hardwareOption: "",
      },
    };
  },
  methods: {
    updateHardwareType(e) {
      console.log("triggered");
      this.$store.commit("updateHardwareType", e.target.value);
    },
  },
};
</script>
