<template>
  <div class="of-container">
    <Header msg="Summary" />
    <navBar />

    <form class="of-grid-small" of-grid @submit.prevent="onSubmit">
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="First Name"
          v-model="info.firstName"
          type="text"
          @input="updateFirstName"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Last Name" v-model="info.lastName" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Organisation" v-model="info.orgName" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Postcode" v-model="info.postcode" type="text" />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput
          label="Contact Number"
          v-model="info.contactNumber"
          type="tel"
        />
      </div>
      <div class="of-width-1-1 of-width-1-2@l">
        <BaseInput label="Email" v-model="info.contactEmail" type="email" />
      </div>
      <button type="submit">Submit</button>
      <div>{{ $store.state.firstName }}</div>
    </form>
  </div>
  <div>{{ info.firstName }}</div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import navBar from "@/components/navBar.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Summary",
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
    updateFirstName() {
      console.log("triggered");
      this.$store.commit("updateFirstName", this.info.firstName);
    },
  },
};
</script>
