<template>
  <div
    :class="[buttonClass, horizontal]"
    :style="[
      buttonFill == 'Solid'
        ? { backgroundColor: themeColour }
        : { backgroundColor: 'transparent' },
      { borderColor: themeColour },
    ]"
  ></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppButton',
  data() {
    return {}
  },
  computed: {
    ...mapState(['themeColour', 'buttonFill']),
    buttonClass() {
      return {
        rectangle:
          this.$store.state.buttonShape == 'Rectangle' ||
          this.$store.state.buttonShape == 'Rounded',
        rounded: this.$store.state.buttonShape == 'Rounded',
        square:
          this.$store.state.buttonShape == 'Square' ||
          this.$store.state.buttonShape == 'Circle',
        circle: this.$store.state.buttonShape == 'Circle',
      }
    },
  },
}
</script>

<style scoped>
div {
  width: 100%;
  border-style: solid;
  border-width: 4px;
}
.rectangle {
  margin: 5px 0px;
  grid-area: span 1 / span 4;
  place-self: center;
  height: 70px;
}
.rounded {
  border-radius: 40px;
}
.square {
  grid-area: span 2 / span 2;
  place-self: center;
  height: 0;
  width: 87.5%;
  padding-bottom: 87.5%;
  /* margin: 10px 10px; */
}
.circle {
  border-radius: 50%;
}

/*Horizontal Modifiers*/
.horizontal .rectangle {
  grid-area: span 1 / span 3;
}
.horizontal .square {
  grid-area: span 3 / span 1;
}
</style>
