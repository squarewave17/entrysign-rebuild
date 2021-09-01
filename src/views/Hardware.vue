<template>
  <Header msg="Hardware" />
  <navBar />
  <div class="of-container">
    <div class="of-flex of-flex-center">
      <ImgRadio
        v-model="info.hardwareOption"
        value="Desk Mount"
        label="Desk Mount"
        name="hardware"
        img="deskmount.png"
        @click="updateHardwareType"
      />
      <ImgRadio
        v-model="info.hardwareOption"
        value="Wall Mount"
        label="Wall Mount"
        name="hardware"
        img="wallmount.png"
        @click="updateHardwareType"
      />
    </div>
    <div class="of-flex of-flex-row of-flex-center">
      <div class="of-p-7">
        <ListItem
          icon="Contactless.png"
          text="Contacless ID Card/Fob Bolt On"
        />
        <ListItem icon="aio-touchscreen.png" text="All-In-One Touchscreen" />
        <ListItem icon="idCard.png" text="1 ID Card Artwork Design" />
        <ListItem icon="Software.png" text="Entrysign Software" />
        <ListItem icon="Thermal.png" text="Thermal Label Printer" />
      </div>
      <div class="of-p-7">
        <ListItem
          icon="iconMainScreen3.png"
          text="Back Office Suite Software"
        />

        <ListItem
          icon="iconMainScreen2.png"
          text="Remote Configuration And Training"
        />
        <ListItem
          icon="entrysign.png"
          text="12 Months Entrysign Live Subscription"
        />
        <ListItem
          icon="iconMainScreen2.png"
          text="1 Main Screen Artwork Design"
        />
        <ListItem icon="1year.png" text="1 Year Solution Support" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import ImgRadio from "@/components/ImgRadio.vue";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "Hardware",
  components: {
    Header,
    navBar,
    ImgRadio,
    ListItem,
  },
  data() {
    return {
      info: {
        hardwareOption: "",
      },
    };
  },
  methods: {
    updateHardwareType(e) {
      console.log("triggered");
      this.$store.commit("updateHardwareType", e.target.value);
    },
  },
};
</script>
