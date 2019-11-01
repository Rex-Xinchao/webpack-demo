<template>
    <div>
        <h1>{{msg + userName}}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  components: {},
  data () {
    return {
      msg: '欢迎'
    }
  },
  methods: {},
  mounted () {
    console.log(`111`)
    console.log("Running App version " + VERSION);
    console.log(PRODUCTION);
    console.log(BROWSER_SUPPORTS_HTML5);
    console.log(TWO);
    console.log(process);
    console.log(process.env.type);
  }
}
</script>
<style scoped></style>
