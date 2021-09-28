<template>
  <Header msg="Summary" />
  <navBar />
  <div class="of-container"></div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import navBar from '@/components/navBar.vue'

export default {
  name: 'Summary',
  components: {
    Header,
    navBar,
  },
  data() {},
}
</script>
