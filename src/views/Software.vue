<template>
  <Header msg="Software" />
  <navBar />
  <div class="of-container">
    <BaseSelect
      :options="misoptions"
      v-model="info.misSystem"
      label="MID System"
      @input="updateMisSystem"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  name: "Software",
  components: {
    Header,
    navBar,
    BaseSelect,
  },
  data() {
    return {
      misoptions: [
        "Capita SIMS",
        "Arbor",
        "isams",
        "Advanced Progresso",
        "ScholarPack",
        "BromCom",
        "RM Integris",
        "Other",
        "None",
      ],
      info: {
        misSystem: "",
      },
    };
  },
  methods: {
    updateMisSystem(e) {
      this.$store.commit("updateMisSystem", e.target.value);
    },
  },
};
</script>
