<template>
    <div class="hive">
    <div>
        Honey: {{ honey.toFixed(1) }}
        <button v-if="honey > 0" v-on:click="sellHoney">Sell Honey</button>
    </div>
    <div>
        Queens: {{ queenCount }}
        <button v-if="this.parentMoney >= queenCost" v-on:click="purchaseQueen">Buy Queen - {{ queenCost }}$</button>
    </div>
    <div>
        Drones: {{ droneCount }}
        <button v-if="this.parentMoney >= droneCost" v-on:click="purchaseDrone">Buy Drone - {{ droneCost }}$</button>
    </div>
    <div>
        Workers: {{ workerCount }}
        <button v-if="this.parentMoney >= workerCost" v-on:click="purchaseWorker">Buy Worker - {{ workerCost }}$</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Hive',
  data () {
    return {
      honey: 0,
      queenCount: 0,
      droneCount: 0,
      workerCount: 0,
      queenCost: 10,
      droneCost: 5,
      workerCost: 1
    }
  },
  props: [
    'parentMoney'
  ],
  methods: {
    purchaseQueen () {
      this.emitPurchase(this.queenCost)
      this.queenCount++
    },
    purchaseDrone () {
      this.emitPurchase(this.droneCost)
      this.droneCount++
    },
    purchaseWorker () {
      this.emitPurchase(this.workerCost)
      this.workerCount++
    },
    produceHoney () {
      this.honey += this.workerCount * 0.1
    },
    spawnWorker () {
      this.workerCount += this.queenCount * this.droneCount
    },
    sellHoney () {
      this.$emit('emit-sell-honey', this.honey)
      this.honey = 0
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
