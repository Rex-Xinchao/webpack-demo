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
  }
}
</script>
<style scoped></style>
