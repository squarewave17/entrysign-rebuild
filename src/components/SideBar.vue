<template>
  <button
    class="of-button of-button-default of-position-top-right"
    type="button"
    of-toggle="target: #offcanvas-flip"
  >
    <p>View Build</p>
  </button>

  <div id="offcanvas-flip" of-offcanvas="flip: true; overlay: true">
    <div class="of-offcanvas-bar">
      <button class="of-offcanvas-close" type="button" of-close></button>

      <h3>Title</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
button {
  padding: 10px;
  text-align: center;
  background-color: var(--of-light);
}
button p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
