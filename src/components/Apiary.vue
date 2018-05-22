<template>
    <div id="apiary">
        <div>
            Money: {{ money.toFixed(1) }}
        </div>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase"></hive>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase"></hive>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase"></hive>
    </div>
</template>

<script>
import Hive from '@/components/Hive'

export default {
  name: 'Apiary',
  data () {
    return {
      money: 100
    }
  },
  components: {
    Hive
  },
  methods: {
    processPurchase (cost) {
      this.money -= cost
    }
  }
}
</script>

<style>
</style>
