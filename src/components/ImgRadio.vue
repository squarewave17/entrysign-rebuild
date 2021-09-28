<template>
  <label>
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
    />
    <div class="imgWrap">
      <img :src="require(`@/assets/${img}`)" />
      <h4>{{ label }}</h4>
    </div></label
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
input[type='radio'] {
  display: none;
}

.imgWrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid #fff; */
  border-radius: 10px;
  padding: 10px;
  position: relative;
  margin: 10px;
  width: 400px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
  cursor: pointer;
}

.imgWrap:before {
  background-color: white;
  color: white;
  content: ' ';
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

input[type='radio']:checked + .imgWrap {
  border-color: var(--of-light);
  background-color: var(--of-light);
}

input[type='radio']:checked + .imgWrap:before {
  content: '✓';
  background-color: grey;
  transform: scale(1);
}

input[type='radio']:checked + .imgWrap {
  transform: scale(0.9);
  /* box-shadow: 0 0 5px #333; */
  z-index: -1;
}
</style>
