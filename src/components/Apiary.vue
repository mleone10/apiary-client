<template>
    <div id="apiary">
        <div>
            <button v-on:click="saveGame">Save Game</button>
            <button v-on:click="resetGame">Reset Game</button>
        </div>
        <div>
            Money: {{ money.toFixed(1) }}
        </div>
        <div>
            Hives: {{ hives.length }}
            <button v-if="money >= costs.hive" v-on:click="buyHive">Buy Hive</button>
        </div>
        <hive v-for="hive in hives" v-bind:hive="hive" v-bind:costs="costs" v-bind:parentMoney="money" v-bind:key="hive.id" v-on:emit-purchase="processPurchase" v-on:emit-sell-honey="sellHoney"></hive>
    </div>
</template>

<script>
import Hive from '@/components/Hive'

export default {
  name: 'Apiary',
  data () {
    return {
      money: 100,
      costs: {
        hive: 85,
        drone: 5,
        worker: 1
      },
      hives: []
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
      this.addHive()
      this.money -= this.costs.hive
    },
    addHive () {
      this.hives.push({
        droneCount: 1,
        workerCount: 0,
        honey: 0
      })
    },
    sellHoney (honeyProfit) {
      this.money += honeyProfit
    },
    saveGame () {
      localStorage.setItem('hives', JSON.stringify(this.hives))
      localStorage.setItem('money', this.money)
    },
    resetGame () {
      this.money = 100
      this.hives = []
      this.saveGame()
    }
  },
  mounted: function () {
    if (localStorage.getItem('hives') !== null) {
      this.hives = JSON.parse(localStorage.getItem('hives'))
      this.money = parseFloat(localStorage.getItem('money'))
    } else {
      this.resetGame()
    }
  }
}
</script>

<style>
</style>
