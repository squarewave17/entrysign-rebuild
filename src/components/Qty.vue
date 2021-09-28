<template>
  <label v-if="label" class="of-form-label">{{ label }}</label>
  <div class="input-container">
    <span class="inc" @click="incrementDecrementNumber('-')">
      <span of-icon="icon: minus-circle"></span>
    </span>

    <input
      v-bind="$attrs"
      type="number"
      ref="input"
      :placeholder="0"
      class="of-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="input-group-append">
      <span class="inc" @click="incrementDecrementNumber('+')">
        <span of-icon="icon: plus-circle"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '0',
    }
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    incrementDecrementNumber(action) {
      switch (action) {
        case '+':
          this.$refs['input'].stepUp()
          break
        case '-':
          this.$refs['input'].stepDown()
          break
      }
      /* Need to manually $emit here since the above methods doesn't trigger our computed set method. */
      this.$emit('input', this.$refs['input'].value)
    },
  },
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
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

label {
  max-width: 365px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}
</style>
