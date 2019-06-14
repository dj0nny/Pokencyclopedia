<template>
  <div class="details">
    <div class="container">

      <h1 class="name">{{ pkmnDetail.name }}</h1>

  
      <div class="row">
        <div class="col-md-12">
          <div class="general-details">
            <h3>Details</h3>
            <div class="row">
              <div class="col-md-4">
                <h6>Pokèdex id:</h6>
                {{ pkmnDetail.id }}
              </div>
              <div class="col-md-4">
                <h6>Abilities:</h6>

              </div>
              <div class="col-md-4">
                <h6>Types:</h6>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="sprites">
            <h3>Sprites</h3>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th v-for="type in spriteTypes" :key="type">{{type}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td v-for="sprite in pkmnDetail.sprites" :key="sprite" :class="{ noSprite: !sprite }">
                      <div class="placeholder">
                        -
                      </div>
                      <img :src="sprite">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      <h3 class="my-4">Related Projects</h3>
    </div>
  </div>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import pkmn from '@/store/modules/pkmn'
import { PkmnResponse } from '@/store/models'

import * as API from '@/api'

@Component
export default class PkmnDetail extends Vue {
  pkmnDetail?: PkmnResponse[] = []
  spriteTypes: string[] = ["back default", "back female", "back shiny", "back shiny female", "front default", "front female", "front shiny", "front shiny female"]

  async created() {
    await pkmn.getDetail(this.$route.params.name).then(() => {
      this.pkmnDetail = pkmn.detail
      console.log(this.pkmnDetail)
    })
  }
}
</script>


<style lang="scss" scoped>
.details {
  margin-top: 30px;
  margin-bottom: 30px;

  h1.name {
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  h3 {
    margin-bottom: 25px;
  }

  .general-details {
    margin-top: 25px;
  }

  .sprites {
    margin-top: 25px;
    margin-bottom: 25px;

      h3 {
        margin-bottom: 20px;
      }

      table.table th {
        text-transform: capitalize;
      }

      .placeholder {
        display: none;
      }
      
      .noSprite .placeholder {
        display: block;
        text-align: center;
      }
  }
}


</style>
