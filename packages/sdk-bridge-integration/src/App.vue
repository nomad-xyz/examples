<template>
  <div class="app-container">
    <div class="nav">
      <div class="nav-container">
        <img src="@/assets/wordmark.png" alt="Nomad" class="wordmark" />
        <n-button v-if="!address" @click="connect">Connect Wallet</n-button>
        <n-tag v-else round type="primary">{{ truncateAddr(address) }}</n-tag>
      </div>
    </div>
    <h1>Nomad SDK Example UI</h1>
    <a href="https://www.npmjs.com/package/@nomad-xyz/sdk-bridge" target="_blank" class="link">NPM Package</a>
    <a href="https://docs.nomad.xyz/sdk-bridge" target="_blank" class="link">Docs</a>
    <div class="main">
      <ui-bridge @connect="connect" :address="address" @new-tx="pushHistory" />
      <ui-balances v-if="address" :address="address" />
      <div v-else class="spacer"></div>
      <ui-history :tx-history="history" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton, NTag } from 'naive-ui';
import { connectWallet, truncateAddr, TXData } from './utils/sdk'
import UiBridge from './components/Bridge.vue';
import UiBalances from './components/Balances.vue';
import UiHistory from './components/History.vue';

export default defineComponent({
  name: 'App',
  components: {
    UiBridge,
    UiBalances,
    UiHistory,
    NButton,
    NTag
  },
  data() {
    return {
      truncateAddr,
      address: '',
      history: this.getHistory()
    }
  },
  methods: {
    getHistory() {
      if (Object.prototype.hasOwnProperty.call(localStorage, 'example_history')) {
        return ref(JSON.parse(localStorage.getItem('example_history')!))
      }
      return ref([])
    },
    async connect() {
      try {
        const address = await connectWallet()
        this.address = address || ''
      } catch {
        console.error('error connecting wallet')
        this.address = ''
      }
    },
    pushHistory(tx: TXData) {
      console.log('new transaction', tx)
      this.history.push({ key: tx.hash, ...tx })
      localStorage.setItem('example_history', JSON.stringify(this.history))
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
.nav-container {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 20px 40px;
}
.wordmark {
  height: 20px;
}
.main {
  width: 100%;
  max-width: 500px;
  margin: 50px 20px;
}
.link {
  color: #41BA83;
}
.spacer {
  height: 20px;
}
</style>
