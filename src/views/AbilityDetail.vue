<template>
  <div class="abilty">
    <h1>{{ ability.name }}</h1>
    <div class="description">
      <div class="row">
        <div class="col-md-12">
          <div class="battle-effect">
            <strong>Battle effect: </strong><span v-for="(item, index) in ability.effect_entries" :key="index">{{item.effect}}</span>
          </div>
          <div class="generation">
            <strong>Generation: </strong><span>{{ability.generation.name}}</span>
          </div>
          <div class="pokemon-list">
            <h2>Pokemon:</h2>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Pokemon name</th>
                    <th scope="col">Is hidden</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in ability.pokemon" :key="index">
                    <td class="pokemon-name">{{ item.pokemon.name }}</td>
                    <td class="is-hidden"><b-form-checkbox :checked="item.is_hidden" disabled></b-form-checkbox></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>  
    </div>
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

<style lang="scss" scoped>
.abilty {

  h1 {
    text-transform: capitalize;
  }

  .description {
    margin-top: 30px;
  }

  .generation {
    margin-top: 20px;
  }

  .pokemon-list {
    margin-top: 30px;

    h2 {
      margin-bottom: 30px;
    }

    .pokemon-name, .is-hidden {
      text-transform: capitalize;
    }

  }

}
</style>
