<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">连接管理</mt-tab-item>
      <mt-tab-item id="2">账号管理</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="all-center">
          <div><mt-switch v-model="connected"></mt-switch></div>
          <!--<p>{{ gateway_current }}</p>-->
          <div>
            <mt-button type="primary" @click="$router.push('landing-page')">刷新状态</mt-button>
            <mt-button @click="$router.push('landing-page')">刷新状态</mt-button>
          </div>
          <div class="footer">
            <img class="logo" src="~@/assets/logo.png" alt="" />
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'

  export default {
    name: 'landing-page',
    data () {
      return {
        selected: '1'
      }
    },
    mounted () {
      if (!this.connected) this.tustnet.checkConnect()
    },
    computed: {
      gateway_current: () => {
        return this.tustnet.getCurrentGateway()
      },
      connected: {
        get () { return this.$store.state.Main.connected },
        set (value) {
          this.$store.dispatch('toggleConnect', {value, tustnet: this.tustnet})
        }
      }
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
  .footer {
    margin: auto 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: auto;
  }

  .logo {
    width: 50vw;
    height: auto;
  }
</style>
