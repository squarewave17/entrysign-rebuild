<template>
  <label v-if="label" class="of-form-label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="of-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
};
</script>

<style scoped></style>
