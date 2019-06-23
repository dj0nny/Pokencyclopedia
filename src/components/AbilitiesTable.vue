<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ability ID</th>
          <th scope="col">Ability Name</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list[0].results" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td class="ability-name">{{ item.name }}</td>
          <td>
            <router-link :to="{ name: 'abilityDetail', params: { name: item.name }}" class="btn btn-primary">Read More</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { AbilitiesListResponse } from '@/store/models'

@Component
export default class AbilitiesTable extends Vue {
  @Prop() list?: AbilitiesListResponse[]

}
</script>

<style lang="scss" scoped>
td.ability-name {
    text-transform: capitalize;
}
</style>

