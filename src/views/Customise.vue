<template>
  <Header msg="Customise" />
  <navBar />
  <Customiser />
  <div class="of-container">
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="layoutOptions"
          v-model="info.layout"
          label="Layout Orientation"
          @input="updateLayout"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="buttonFills"
          v-model="info.buttonFill"
          label="Button Fill"
          @input="updateButtonFill"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="buttonShapes"
          v-model="info.buttonShape"
          label="Button Shape"
          @input="updateButtonShape"
        />
      </div>

      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="themeStyles"
          v-model="info.themeStyle"
          label="Page Style"
          @input="updateThemeStyle"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Logo URL"
          v-model="logoUpload"
          type="url"
          @input="updatelogo"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Theme Colour"
          v-model="themeColour"
          type="color"
          @input="updateThemeColour"
        />
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import Customiser from "@/components/Customiser.vue";

export default {
  name: "Home",
  components: {
    Header,
    navBar,
    BaseInput,
    BaseSelect,
    Customiser,
  },
  data() {
    return {
      layoutOptions: [
        "Horizontal",
        "Vertical",
        "Horizontal two columns",
        "Vertical two columns",
      ],
      buttonFills: ["Outline", "Solid"],
      buttonShapes: ["Square", "Rounded", "Circle"],
      themeStyles: ["Filled", "Light"],
      info: {
        layout: "",
        buttonFill: "",
        buttonShape: "",
        themeColour: "",
        themeStyle: "",
        logoUpload: "",
      },
    };
  },
  methods: {
    updateLayout(e) {
      console.log("triggered");
      this.$store.commit("updateLayout", e.target.value);
    },
    updateButtonFill(e) {
      console.log("triggered");
      this.$store.commit("updateButtonFill", e.target.value);
    },
    updateButtonShape(e) {
      console.log("triggered");
      this.$store.commit("updateButtonShape", e.target.value);
    },
    updateThemeColour(e) {
      console.log("triggered");
      this.$store.commit("updateThemeColour", e.target.value);
    },
    updateThemeStyle(e) {
      console.log("triggered");
      this.$store.commit("updateThemeStyle", e.target.value);
    },
    updatelogo(e) {
      console.log("triggered");
      this.$store.commit("updatelogo", e.target.value);
    },
  },
};
</script>

<style scoped></style>
