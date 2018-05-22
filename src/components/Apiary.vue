<template>
    <div id="apiary">
        <div>
            Money: {{ money.toFixed(1) }}
        </div>
        <div>
            Hives: {{ hiveCount }}
            <button v-if="money >= hiveCost" v-on:click="buyHive">Buy Hive</button>
        </div>
        <hive v-for="hive in hiveCount" v-bind:key="hive" v-bind:parentMoney="money" v-on:emit-purchase="processPurchase" v-on:emit-sell-honey="sellHoney"></hive>
    </div>
</template>

<script>
import Hive from '@/components/Hive'

export default {
  name: 'Apiary',
  data () {
    return {
      money: 100,
      hiveCost: 85,
      hiveCount: 0
    }
  },
  components: {
    Hive
  },
  methods: {
    processPurchase (cost) {
      this.money -= cost
    },
    buyHive () {
      this.hiveCount += 1
      this.money -= this.hiveCost
    },
    sellHoney (honeyProfit) {
      this.money += honeyProfit
    }
  }
}
</script>

<style>
</style>
