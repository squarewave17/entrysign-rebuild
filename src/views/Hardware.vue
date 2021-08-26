<template>
  <div class="of-container">
    <Header msg="Hardware" />
    <navBar />
    <RadioGroup
      v-model="hardwareOption"
      name="Hardware"
      :options="hardwareOptions"
    />
    <div>{{ hardwareOption }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import RadioGroup from "@/components/RadioGroup.vue";

export default {
  name: "Hardware",
  components: {
    Header,
    navBar,
    RadioGroup,
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
};
</script>
