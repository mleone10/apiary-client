<template>
    <div class="hive">
    <div>
        Honey: {{ this.hive.honey.toFixed(1) }}
        <button v-if="hive.honey > 0" v-on:click="sellHoney">Sell Honey</button>
    </div>
    <div>
        Drones: {{ this.hive.droneCount }}
        <button v-if="this.parentMoney >= this.costs.drone" v-on:click="purchaseDrone">Buy Drone - {{ this.costs.drone }}$</button>
    </div>
    <div>
        Workers: {{ this.hive.workerCount }} <button v-if="this.parentMoney >= this.costs.worker" v-on:click="purchaseWorker">Buy Worker - {{ this.costs.worker }}$</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Hive',
  props: [
    'hive',
    'costs',
    'parentMoney'
  ],
  methods: {
    purchaseDrone () {
      this.emitPurchase(this.costs.drone)
      this.hive.droneCount++
    },
    purchaseWorker () {
      this.emitPurchase(this.costs.worker)
      this.hive.workerCount++
    },
    produceHoney () {
      this.hive.honey += this.hive.workerCount * 0.1
    },
    spawnWorker () {
      var numNewWorkers = this.hive.droneCount
      if (this.hive.workerCount + numNewWorkers < 100) {
        this.hive.workerCount += this.hive.droneCount
      } else {
        this.hive.workerCount = 100
      }
    },
    sellHoney () {
      this.$emit('emit-sell-honey', this.hive.honey)
      this.hive.honey = 0
    },
    emitPurchase (cost) {
      this.$emit('emit-purchase', cost)
    }
  },
  mounted: function () {
    setInterval(this.produceHoney, 500)
    setInterval(this.spawnWorker, 1000)
  }
}
</script>

<style>
</style>
