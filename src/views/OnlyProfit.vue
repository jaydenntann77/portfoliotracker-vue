<script>
import ProfitDisplay from "@/components/ProfitDisplay.vue";

export default {
  name: "Profit",
  components: { ProfitDisplay },
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
  <ProfitDisplay :key="refreshComp" />
</template>

<style>
</style>