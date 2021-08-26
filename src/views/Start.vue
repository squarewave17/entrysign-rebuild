<template>
  <div class="of-container">
    <Header msg="Start" />
    <navBar />
    <RadioGroup v-model="orgSize" name="Start" :options="orgOptions" />
    <div>{{ orgSize }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import RadioGroup from "@/components/RadioGroup.vue";

export default {
  name: "Start",
  components: {
    Header,
    navBar,
    RadioGroup,
  },
  data() {
    return {
      orgSize: "",
      orgOptions: [
        { label: "Single Organisation", value: "Single Organisation" },
        { label: "Multi-Academy Trust", value: "Multi-Academy Trust" },
      ],
    };
  },
};
</script>
