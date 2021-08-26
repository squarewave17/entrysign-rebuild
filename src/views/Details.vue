<template>
  <div class="of-container">
    <Header msg="Details" />
    <navBar />
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="First Name" v-model="firstName" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Last Name" v-model="lastName" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Organisation" v-model="orgName" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Postcode" v-model="postcode" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Contact Number" v-model="contactNumber" type="tel" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Email" v-model="info.contactEmail" type="email" />
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Details",
  components: {
    Header,
    navBar,
    BaseInput,
  },
  data() {
    return {
      info: {
        firstName: "",
        lastName: "",
        orgName: "",
        postcode: "",
        contactNumber: "",
        contactEmail: "",
      },
    };
  },
};
</script>
