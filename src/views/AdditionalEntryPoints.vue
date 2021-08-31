<template>
  <Header msg="Additional Entry Points" />
  <navBar />
  <div class="of-container">
    <div>
      <h4 class="of-bolder">
        Would you like to have the ability to sign people in or out at
        additional entry and exit points in your organisation?
      </h4>
      <p>
        This is usually a staff entrance from a car park or another reception
        area. This could be another building or location provided they are on
        the same site and network.
      </p>
    </div>
    <div of-grid class="of-child-width-expand@s of-text-center">
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/Screen1.png" />
        <BaseInput
          label="RFID Terminal"
          v-model="additionalRFID"
          type="number"
        />
      </div>
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/deskmount.png" />
        <BaseInput label="Desk Mount" v-model="additionalDM" type="number" />
      </div>
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/wallmount.png" />
        <BaseInput label="Wall Mount" v-model="additionalWM" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Home",
  components: {
    Header,
    navBar,
    BaseInput,
  },
  data() {
    return {
      info: {
        additionalRFID: "",
        additionaDM: "",
        additionalWM: "",
      },
    };
  },
};
</script>

<style scoped>
img {
  max-width: 365px;
}
</style>
