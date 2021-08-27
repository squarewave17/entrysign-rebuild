<template>
  <Header msg="Infection Control Package" />
  <navBar />
  <div class="of-container">
    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="info.radTest"
        value="Multi"
        name="start"
        img="OrganisationMan.png"
      />
      <ImgRadio
        v-model="info.radTest2"
        value="desk"
        name="start"
        img="Organisation2.png"
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
  name: "ICP",
  components: {
    Header,
    navBar,
    ImgRadio,
  },
  data() {
    return {
      info: {
        radTest: "",
        radTest2: "",
      },
    };
  },
};
</script>
