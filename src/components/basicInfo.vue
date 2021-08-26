<template>
  <div class="of-container">
    <div>
      <p>
        So that we can build your system, we need some information to create
        your solution. <br />
        Are you a single organisation or part of a multi-academy trust?
      </p>
    </div>

    <fieldset>
      <div class="of-column-1-2">
        <div class="left of-relative">
          <div
            class="ischecked of-position-top-left"
            v-if="organisation === 'single'"
          >
            <img class="check" :src="checked" />
          </div>
          <div :class="{ selected: singleOrganisation }">
            <label
              @mouseover="singleHover = true"
              @mouseleave="singleHover = false"
              for="ck2a"
              @click="showModal = true"
            >
              <input
                type="radio"
                class="custom-control-input"
                id="ck2a"
                name="organisation"
                value="single"
                v-model="organisation"
                @change="changed"
              />
              <img class="list-complete-img" :src="singleMan" />
              <h4 class="pt-5">Single Organisation</h4>

              <p>
                You are configuring your system for a single organisation. You
                might be part of a MAT and have multiple locations, which you
                can configure later in the process. If you are configuring your
                system as part of a large scale MAT roll out, please choose the
                multi-academy trust option.
              </p>
            </label>
          </div>
        </div>
        <!-- End of left Half -->
        <div class="right of-relative">
          <div
            class="ischecked of-position-top-left"
            v-if="organisation === 'group'"
          >
            <img class="check" :src="checked" />
          </div>
          <div
            class="custom-control custom-radio image-checkbox"
            :class="{ selected: groupOrganisation }"
          >
            <label
              class="custom-control-label hover-label"
              @mouseover="multiHover = true"
              @mouseleave="multiHover = false"
              for="ck2b"
              @click="showModal = true"
            >
              <input
                type="radio"
                class="custom-control-input"
                id="ck2b"
                name="organisation"
                value="group"
                v-model="organisation"
                @change="changed"
              />

              <img :src="groupMan" />

              <h4 class="pt-5">Multi-Academy Trust</h4>
              <p>
                You are configuring your system as a multi-academy trust. Please
                choose this option if you are configuring your system as part of
                a large scale MAT roll out.
              </p>
            </label>
          </div>
        </div>
        <!-- End of right Half -->
      </div>
    </fieldset>
  </div>
</template>

<script>
import group from "../assets/Organisation2.png";
import singleMan from "../assets/OrganisationMan.png";
import checked from "../assets/Checked.png";

export default {
  name: "basicInfo",
  methods: {
    prevPage() {
      this.$router.push({ name: "Home" });
    },
    nextPage() {
      this.$router.push({ name: "Hardware" });
    },
  },
  props: {},
  data() {
    return {
      showModal: false,
      singleHover: false,
      multiHover: false,
      groupMan: group,
      singleMan: singleMan,
      checked: checked,
      organisation: false,
    };
  },
};
</script>

<style>
.of-relative {
  position: relative;
}

.check {
  width: 30px;
}

input.custom-control-input {
  cursor: pointer;
}
.custom-control-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

fieldset {
  border: none;
}
</style>
