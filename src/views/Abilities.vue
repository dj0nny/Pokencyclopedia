<template>
  <div class="abilities-list">
    <h1>Abilities</h1>
    <div class="row">
      <div class="col-md-12">
        <AbilitiesTable :list="abilitiesList"></AbilitiesTable>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import pkmn from '@/store/modules/pkmn'
import { AbilitiesListResponse } from '@/store/models'

import * as API from '@/api'

import AbilitiesTable from '@/components/AbilitiesTable.vue'

@Component({
  components: {
    AbilitiesTable
  }
})
export default class Abilities extends Vue {
  abilitiesList: AbilitiesListResponse[] = []

  async created() {
    await pkmn.getAbilities().then(() => {
      this.abilitiesList = pkmn.abilities
      console.log(this.abilitiesList)
    })
  }
}
</script>