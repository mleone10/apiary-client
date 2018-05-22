<template>
    <div class="hive">
    <div>
        Honey: {{ honey.toFixed(1) }}
        <button v-if="honey > 0" v-on:click="sellHoney">Sell Honey</button>
    </div>
    <div>
        Hives: {{ hiveCount }}
        <button v-if="money >= hiveCost" v-on:click="purchaseHive">Buy Hive - {{ hiveCost }}$</button>
    </div>
    <div>
        Queens: {{ queenCount }}
        <button v-if="money >= queenCost" v-on:click="purchaseQueen">Buy Queen - {{ queenCost }}$</button>
    </div>
    <div>
        Drones: {{ droneCount }}
        <button v-if="money >= droneCost" v-on:click="purchaseDrone">Buy Drone - {{ droneCost }}$</button>
    </div>
    <div>
        Workers: {{ workerCount }}
        <button v-if="money >= workerCost" v-on:click="purchaseWorker">Buy Worker - {{ workerCost }}$</button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Hive',
  data () {
    return {
      money: this.parentMoney,
      honey: 0,
      hiveCount: 1,
      queenCount: 0,
      droneCount: 0,
      workerCount: 0,
      hiveCost: 50,
      queenCost: 10,
      droneCost: 5,
      workerCost: 1
    }
  },
  props: [
    'parentMoney'
  ],
  methods: {
    purchaseHive () {
      this.emitPurchase(this.hiveCost)
      this.hiveCount++
    },
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
    sellHoney () {
      this.money += this.honey
      this.honey = 0
    },
    spawnWorker () {
      this.workerCount += this.queenCount * this.droneCount
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
