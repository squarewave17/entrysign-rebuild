<template>
  <Header msg="Additional Entry Points" />
  <navBar />
  <div class="of-container">
    <div>
      <h4 class="of-bolder">
        Would you like to have the ability to sign people in or out at
        additional entry and exit points in your organisation?
      </h4>
      <p>
        This is usually a staff entrance from a car park or another reception
        area. This could be another building or location provided they are on
        the same site and network.
      </p>
    </div>
    <div of-grid class="of-child-width-expand@s of-text-center">
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/Screen1.png" />
        <Qty
          label="RFID Terminal"
          v-model="additionalRFID"
          type="number"
          @input="updateAdditionalRFID"
        />
      </div>
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/deskmount.png" />
        <BaseInput
          label="Desk Mount"
          v-model="additionalDM"
          type="number"
          @input="updateAdditionalDesk"
        />
      </div>
      <div class="of-flex of-flex-column">
        <img class="of-p-8" src="@/assets/wallmount.png" />
        <BaseInput
          label="Wall Mount"
          v-model="additionalWM"
          type="number"
          @input="updateAdditionalWall"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import navBar from '@/components/navBar.vue'
import BaseInput from '@/components/BaseInput.vue'
import Qty from '@/components/Qty.vue'

export default {
  name: 'Additional Entry Points',
  components: {
    Header,
    navBar,
    BaseInput,
    Qty,
  },
  data() {
    return {
      info: {
        additionalRFID: '',
        additionaDM: '',
        additionalWM: '',
      },
    }
  },
  methods: {
    updateAdditionalRFID(e) {
      this.$store.commit('updateAdditionalRFID', e.target.value)
    },
    updateAdditionalDesk(e) {
      this.$store.commit('updateAdditionalDesk', e.target.value)
    },
    updateAdditionalWall(e) {
      this.$store.commit('updateAdditionalWall', e.target.value)
    },
  },
}
</script>

<style scoped>
img {
  max-width: 365px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
