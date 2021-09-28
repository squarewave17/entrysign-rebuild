<template>
  <div class="customiser-container" :class="horizontal">
    <div
      class="customiser-half ch-right"
      :style="[
        themeStyle == 'Filled'
          ? { backgroundColor: themeColour }
          : { backgroundColor: 'transparent' },
        { borderColor: themeColour },
      ]"
    >
      <div class="customiser-details">
        <img :src="logoUpload" />
        <!-- <img src="@/assets/EntrySignBlackcopy.png" /> -->
        <div>
          <h1 :style="'color:' + textColor">Welcome</h1>
          <h2 :style="'color:' + textColor">Please Select an Option</h2>
        </div>
      </div>
    </div>
    <div class="customiser-half ch-left" :style="{ borderColor: themeColour }">
      <div class="button-container">
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'Customiser',
  components: {
    AppButton,
  },
  data() {
    return {}
  },
  props: {
    textColor: {
      type: String,
      default: '#141414',
    },
  },
  computed: {
    ...mapState(['themeColour', 'themeStyle', 'logoUpload']),
    horizontal() {
      return {
        horizontal: this.$store.state.layout == 'Horizontal',
      }
    },
    pageStyle() {
      return {
        filled: this.$store.state.themeStyle == 'Filled',
      }
    },
  },
}
</script>

<style scoped>
/* Vertical (DEFAULT) Styles */
.customiser-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.customiser-half {
  border-width: 4px 0px;
  border-style: solid;
  width: 50%;
  padding: 20px 60px;
}
.ch-left {
  border-left-width: 2px;
  border-right-width: 4px;
}
.ch-right {
  border-right-width: 2px;
  border-left-width: 4px;
}
.customiser-details {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.customiser-details img {
  width: 50%;
  margin: 0 auto;
}
.button-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 30px 0px;
  width: 90%;
  margin: auto;
}

/* Horizontal Styles */
.customiser-container.horizontal {
  flex-direction: column;
}
.horizontal .customiser-half {
  border-width: 4px 4px;
  width: 100%;
  padding: 20px 0px;
}
.horizontal .customiser-half.ch-left {
  border-top-width: 4px;
}
.horizontal .customiser-half.ch-right {
  border-bottom-width: 4px;
  min-height: 300px;
}
.horizontal .customiser-details {
  flex-direction: row;
}
.horizontal .customiser-details img {
  width: 20%;
  margin: 0 0;
}
.horizontal .button-container {
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px 30px;
  min-height: 280px;
}
</style>
