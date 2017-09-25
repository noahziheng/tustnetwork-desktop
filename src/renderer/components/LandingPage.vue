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
        console.log(r)
      }).catch(this.handleError)
      /* this.$http.get('http://59.67.0.220').then(r => {
        console.log(r)
        throw new Error()
      }).catch(err => {
        console.log(err instanceof Error)
        console.log('Auth server connect failed!(' + err.message + ')')
        isOnline().then(online => {
          console.log(online)
          if (!online) MessageBox.alert('').then(this.$electron.remote.app.quit)
          // => true 
        })
      }) */
    },
    methods: {
      handleError (msg) {
        msg = msg instanceof Error ? msg.message : msg
        console.error(msg)
        MessageBox.alert(msg).then(this.$electron.remote.app.quit)
      },
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    overflow: hidden;
  }

  .all-center {
    display: flex;
    text-align: center; 
    width: 100%;
    height: 95vh;
    p {
      color: #333;
    }
    div {
      margin: auto;
    }
  }
</style>
