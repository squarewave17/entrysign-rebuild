<template>
  <Header msg="Customise" />
  <navBar />

  <div class="of-container-xlarge customiser-page">
    <div class="of-form-container of-mx-5">
      <form class="of-grid-small" of-grid>
        <div class="of-width-1-1">
          <BaseSelect
            :options="layoutOptions"
            v-model="info.layout"
            label="Layout Orientation"
            @input="updateLayout"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonFills"
            v-model="info.buttonFill"
            label="Button Fill"
            @input="updateButtonFill"
          />
        </div>
        <div class="of-width-1-1">
          <BaseSelect
            :options="buttonShapes"
            v-model="info.buttonShape"
            label="Button Shape"
            @input="updateButtonShape"
          />
        </div>

        <div class="of-width-1-1">
          <BaseSelect
            :options="themeStyles"
            v-model="info.themeStyle"
            label="Page Style"
            @input="updateThemeStyle"
          />
        </div>
        <div class="of-width-1-1">
          <BaseInput
            label="Logo URL"
            v-model="logoUpload"
            type="url"
            @input="updatelogo"
          />
        </div>
        <div class="of-width-1-1">
          <BaseInput
            label="Theme Colour"
            v-model="themeColour"
            type="color"
            @input="updateThemeColour"
          />
        </div>
      </form>
    </div>
    <Customiser />
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
      layoutOptions: ["Vertical", "Horizontal"],
      buttonFills: ["Outline", "Solid"],
      buttonShapes: ["Rectangle", "Rounded", "Square", "Circle"],
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
      this.$store.commit("updateLayout", e.target.value);
    },
    updateButtonFill(e) {
      this.$store.commit("updateButtonFill", e.target.value);
    },
    updateButtonShape(e) {
      this.$store.commit("updateButtonShape", e.target.value);
    },
    updateThemeColour(e) {
      this.$store.commit("updateThemeColour", e.target.value);
    },
    updateThemeStyle(e) {
      this.$store.commit("updateThemeStyle", e.target.value);
    },
    updatelogo(e) {
      this.$store.commit("updatelogo", e.target.value);
    },
  },
};
</script>

<style scoped>
.customiser-page {
  margin: auto;
  display: flex;
  flex-direction: row;
}
.of-form-container {
  width: 30%;
}
</style>
