<template>
  <Header msg="Hardware" />
  <navBar />
  <div class="of-container">
    <BaseRadio
      v-model="hardwareOption"
      value="Desktop"
      label="Desktop"
      name="start"
      @click="updateHardwareType"
    />
    <BaseRadio
      v-model="hardwareOption"
      value="Wall Mounted"
      label="Wall Mounted"
      name="start"
      @click="updateHardwareType"
    />
    <div>{{ hardwareOption }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseRadio from "@/components/BaseRadio.vue";

export default {
  name: "Hardware",
  components: {
    Header,
    navBar,
    BaseRadio,
  },
  data() {
    return {
      hardwareOption: "",
      hardwareOptions: [
        { label: "Desktop", value: "Desktop" },
        { label: "Wall Mount", value: "Wall Mounted" },
      ],
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
