<template>
  <Header msg="Access Door Control" />
  <navBar />
  <div class="of-container">
    <BaseSelect
      :options="adcoptions"
      v-model="info.doorAccess"
      label="Select Something"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  name: "Home",
  components: {
    Header,
    navBar,
    BaseSelect,
  },
  data() {
    return {
      adcoptions: ["Paxton", "Stanley", "Other"],
      info: {
        doorAcces: "",
      },
    };
  },
};
</script>
