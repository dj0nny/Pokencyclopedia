<template>
  <div>
    {{$route.params.name}}
  </div>
</template>


<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import pkmn from '@/store/modules/pkmn'

import { AbilityDetailsResponse } from '@/store/models'

import * as API from '@/api'

@Component
export default class AbilityDetail extends Vue {
  ability: AbilityDetailsResponse[] = []

  async created() {
    await pkmn.getAbilityDetail(this.$route.params.name).then(() => {
      this.ability = pkmn.abilityDetails
      console.log(this.ability)
    })
  }
}
</script>