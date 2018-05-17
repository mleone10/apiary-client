<template>
    <div id="apiary">
    <div>
        Money: {{ money.toFixed(1) }}
    </div>
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
  name: 'Apiary',
  data () {
    return {
      money: 100,
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
  methods: {
    purchaseHive () {
      this.money -= this.hiveCost
      this.hiveCount++
    },
    purchaseQueen () {
      this.money -= this.queenCost
      this.queenCount++
    },
    purchaseDrone () {
      this.money -= this.droneCost
      this.droneCount++
    },
    purchaseWorker () {
      this.money -= this.workerCost
      this.workerCount++
    },
    produceHoney () {
      this.honey += this.workerCount * 0.1
    },
    sellHoney () {
      this.money += this.honey
      this.honey = 0
    }
  },
  mounted: function () {
    setInterval(this.produceHoney, 500)
  }
}
</script>

<style>
</style>
