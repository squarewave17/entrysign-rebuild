<template>
  <label v-if="label" class="of-form-label">{{ label }}</label>
  <div class="input-container">
    <span class="of-m-3"><span of-icon="icon: minus-circle"></span></span>

    <input
      v-bind="$attrs"
      :placeholder="0"
      class="of-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span class="of-m-3"><span of-icon="icon: plus-circle"></span></span>
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
