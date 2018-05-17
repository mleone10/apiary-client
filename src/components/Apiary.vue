<template>
    <div id="apiary">
    <p>
        Money: <span>{{ money }}</span>
    <p>
    <p>
        Honey: <span>{{ honey }}</span>
    <p>
        Hives: <span>{{ hiveCount }}</span>
        <button v-if="money >= hiveCost" v-on:click="purchaseHive">Buy Hive - {{ hiveCost }}$</button>
    </p>
    <p>
        Queens: <span>{{ queenCount }}</span>
        <button v-if="money >= queenCost" v-on:click="purchaseQueen">Buy Queen - {{ queenCost }}$</button>
    </p>
    <p>
        Drones: <span>{{ droneCount }}</span>
        <button v-if="money >= droneCost" v-on:click="purchaseDrone">Buy Drone - {{ droneCost }}$</button>
    </p>
    <p>
        Workers: <span>{{ workerCount }}</span>
        <button v-if="money >= workerCost" v-on:click="purchaseWorker">Buy Worker - {{ workerCost }}$</button>
    </p>
    </div>
</template>

<script>
export default {
  name: 'Apiary',
  data () {
    return {
      money: 100,
      honey: 0,
      hiveCount: 0,
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
    }
  }
}
</script>

<style>
</style>
