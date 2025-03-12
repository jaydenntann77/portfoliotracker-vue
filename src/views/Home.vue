<script>
import AddCoin from "@/components/AddCoin.vue";
import ProfitDisplay from "@/components/ProfitDisplay.vue";
import WelcomeCPP from "@/components/WelcomeCPP.vue";

export default {
  name: "App",
  components: { AddCoin, ProfitDisplay, WelcomeCPP },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp += 1;
    },
  },
};
</script>


<template>
  <WelcomeCPP />
  <AddCoin @added="change" />
  <ProfitDisplay :key="refreshComp" />
</template>

<style>
</style>