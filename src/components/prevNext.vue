<template>
  <div class="of-container"><router-link {{next}}>Next</router-link> ></div>
</template>

<script>
export default {
  name: "PrevNext",
  props: {
    prev: String,
    next: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
