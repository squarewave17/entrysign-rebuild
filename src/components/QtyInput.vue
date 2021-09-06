<template>
  <label v-if="label" class="of-form-label">{{ label }}</label>
  <div class="input-container">
    <span class="of-m-3"
      ><svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          fill="none"
          stroke="#000"
          stroke-width="1.1"
          cx="9.5"
          cy="9.5"
          r="9"
        />
        <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg
    ></span>

    <input
      v-bind="$attrs"
      :placeholder="0"
      class="of-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span class="of-m-3"
      ><svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="qtyIncrease"
      >
        <circle
          fill="none"
          stroke="#000"
          stroke-width="1.1"
          cx="9.5"
          cy="9.5"
          r="9"
        />
        <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14" />
        <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    qtyIncrease() {
      console.log(this.$attrs["input"]);
      this.$refs["input"].stepUp();
      console.log(this.$refs["input"]);
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

input {
  width: 50px;
}
</style>
