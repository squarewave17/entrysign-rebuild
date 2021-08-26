<template>
  <div class="of-container">
    <Header msg="Customise" />
    <navBar />
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="layoutOptions"
          v-model="info.layout"
          label="Layout Orientation"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="buttonFills"
          v-model="info.buttonFill"
          label="Button Fill"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="buttonShapes"
          v-model="info.buttonShape"
          label="Button Shape"
        />
      </div>

      <div class="of-width-1-1 of-width-1-2@l">
        <BaseSelect
          :options="themeStyles"
          v-model="info.themeStyle"
          label="Page Style"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l"></div>
      <div class="of-width-1-1 of-width-1-2@l"></div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
//import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  name: "Home",
  components: {
    Header,
    navBar,
    //BaseInput,
    BaseSelect,
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
        themeStyle: "",
      },
    };
  },
};
</script>
