<template>
  <div class="stats-detail">
    <div class="row" v-for="stat in stats" :key="stat.stat.name">
      <div class="col-md-4">
        <span class="stat-name">
          {{ stat.stat.name }}
        </span>
      </div>
      <div class="col-md-8">
        <b-progress :max="max">
          <b-progress-bar :value="stat.base_stat" :label="stat.base_stat.toString()" show-progress></b-progress-bar>
        </b-progress>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Stats extends Vue {
  @Prop() stats?: any
  
  max: number = 200  
}
</script>


<style lang="scss" scoped>
span.stat-name {
    text-transform: capitalize;
}
</style>
