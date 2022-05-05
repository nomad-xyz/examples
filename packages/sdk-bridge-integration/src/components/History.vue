<template>
  <n-data-table
    :columns="columns"
    :data="txHistory"
    :loading="loading"
    :pagination="{ pageSize: 10 }"
  />
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';
import { NDataTable } from 'naive-ui';
import { truncateAddr } from '../utils/sdk';
import { TXData } from '../utils/types'
import NomadTransactionData from './TxData.vue'

const createColumns = () => {
  return [
    {
      type: 'expand',
      expandable: () => true,
      renderExpand: (rowData: TXData) => {
        return h(
          NomadTransactionData,
          { tx: rowData }
        )
      }
    },
    {
      title: 'Origin Network',
      key: 'origin'
    },
    {
      title: 'Destination Network',
      key: 'destination'
    },
    {
      title: 'Transaction Hash',
      key: 'hash',
      render (row: TXData) {
        return truncateAddr(row.hash)
      }
    }
  ]
}

export default defineComponent({
  name: 'NomadHistory',
  components: {
    NDataTable
  },
  props: {
    txHistory: {
      type: Array
    }
  },
  data() {
    return {
      loading: false,
      columns: createColumns(),
    }
  },
});
</script>
