<template>
  <button
    class="of-button of-button-default of-position-top-right"
    type="button"
    of-toggle="target: #offcanvas-flip"
  >
    <p>View System</p>
  </button>

  <div
    id="offcanvas-flip"
    of-offcanvas="flip: true; overlay: false; mode: reveal;"
  >
    <div class="of-offcanvas-bar">
      <button class="of-offcanvas-close" type="button" of-close></button>

      <div class="systemBuild">
        <h4>Your System</h4>
        Organisation Type: {{ $store.getters.orgSize }}
        <br />
        Your Name: {{ $store.getters.firstName }}
        <br />
        Your Last Name: {{ $store.getters.lastName }}
        <br />
        Organisation Name: {{ $store.getters.orgName }}
        <br />
        Postcode: {{ $store.getters.postcode }}
        <br />
        Email {{ $store.getters.contactEmail }}
        <br />
        Phone {{ $store.getters.contactNumber }}
        <br />
        Mount Type: {{ $store.getters.hardwareType }}
        <br />
        <strong>Customisation</strong>
        <br />
        Layout: {{ $store.getters.layout }}
        <br />
        Button Style: {{ $store.getters.buttonFill }}
        <br />
        Border Radius: {{ $store.getters.buttonShape }}
        <br />
        Page Style: {{ $store.getters.themeStyle }}
        <br />
        Logo: {{ $store.getters.logoUpload }}
        <br />
        Theme Colour: {{ $store.getters.themeColour }}
        <br />
        <strong>Additional Entry Points</strong>
        <br />
        RFID: {{ $store.getters.additionalRFID }}
        <br />
        Desk: {{ $store.getters.additionalDesk }}
        <br />
        Wall: {{ $store.getters.additionalWall }}
        <br />
        <strong>Access Door Control</strong>
        <br />
        ADC: {{ $store.getters.accessDoorControl }}
        <br />
        <strong>Software</strong>
        <br />
        ADC: {{ $store.getters.misSystem }}
      </div>
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
  background-color: var(--of-white);
}
button:hover {
  padding: 10px;
  text-align: center;
  background-color: var(--of-light);
}
button p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

button.of-offcanvas-close {
  background-color: unset;
  color: var(--of-dark);
}
.of-offcanvas-bar {
  color: var(--of-dark);
  background: var(--of-light);
}

h4[data-v-3eca7188] {
  color: var(--of-dark);
}

.systemBuild {
  text-align: left;
}
</style>
