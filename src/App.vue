<template>
    <div>
        <h1>{{msg + userName}}</h1>
        <router-view id="app"/>
        <img src="./asset/bg1.jpg">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  components: {},
  data () {
    return {
      msg: 'Hello'
    }
  },
  methods: {},
  mounted () {
  }
}
</script>
<style scoped>
    @import "style/index.css";
</style>
