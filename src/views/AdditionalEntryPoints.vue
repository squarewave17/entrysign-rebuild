<template>
  <div class="page-container">
    <Header msg="Additional Entry Points" />
    <navBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";

export default {
  name: "Home",
  components: {
    Header,
    navBar,
  },
  data() {
    return {};
  },
};
</script>
