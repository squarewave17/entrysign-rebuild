<template>
  <Header msg="Details" />
  <navBar />
  <div class="of-container">
    <form class="of-grid-small" of-grid>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="First Name"
          v-model="firstName"
          type="text"
          @input="updateFirstName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Last Name"
          v-model="lastName"
          type="text"
          @input="updateLastName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Organisation"
          v-model="orgName"
          type="text"
          @input="updateOrgName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Postcode"
          v-model="postcode"
          type="text"
          @input="updatePostcode"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Contact Number"
          v-model="contactNumber"
          type="tel"
          @input="updateContactNumber"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Email"
          v-model="info.contactEmail"
          type="email"
          @input="updateContactEmail"
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
  methods: {
    updateFirstName(e) {
      this.$store.commit("updateFirstName", e.target.value);
    },
    updateLastName(e) {
      this.$store.commit("updateLastName", e.target.value);
    },
    updateOrgName(e) {
      this.$store.commit("updateOrgName", e.target.value);
    },
    updatePostcode(e) {
      this.$store.commit("updatePostcode", e.target.value);
    },
    updateContactNumber(e) {
      this.$store.commit("updateContactNumber", e.target.value);
    },
    updateContactEmail(e) {
      this.$store.commit("updateContactEmail", e.target.value);
    },
  },
};
</script>
