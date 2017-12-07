<template>
  <div class="all-center">
    <div>
      <mt-spinner type="snake" color="rgb(38,162,255)" :size="60"></mt-spinner>
      <p>正在检测网络...</p>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'

  export default {
    name: 'landing-page',
    mounted () {
      this.tustnet.checkConnect().then(r => {
        this.$store.commit('SETCONNECTED', r)
        this.$router.replace('home')
      }).catch(this.handleError)
    },
    methods: {
      handleError (msg) {
        msg = msg instanceof Error ? msg.message : msg
        console.error(msg)
        MessageBox.alert(msg).then(this.$electron.remote.app.quit)
      }
    }
  }
</script>

<style lang="scss">
</style>
