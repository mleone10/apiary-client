<template>
    <div id="apiary">
        <div>
            Money: {{ money.toFixed(1) }}
        </div>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase" v-on:emit-sell-honey="sellHoney"></hive>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase" v-on:emit-sell-honey="sellHoney"></hive>
        <hive v-bind:parentMoney="money" v-on:emit-purchase="processPurchase" v-on:emit-sell-honey="sellHoney"></hive>
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
    },
    sellHoney (honeyProfit) {
      this.money += honeyProfit
    }
  }
}
</script>

<style>
</style>
