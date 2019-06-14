<template>
  <div class="detail">
    <div class="container">
      <h1 class="name">{{ pkmnDetail.name }}<br></h1>
      <h3>Pokedex number: <small>{{ pkmnDetail.id }}</small></h3> 
      

      <div class="row">

        <div class="col-md-8">
          <!-- <div class="row">
            <div class="col-md-4" v-for="sprite in pkmnDetail.sprites" :key="sprite">
              <div v-if="sprite != null">
                <img :src="sprite">
              </div>
            </div>
          </div> -->
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Project Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h3 class="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
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

  async created() {
    await pkmn.getDetail(this.$route.params.name).then(() => {
      this.pkmnDetail = pkmn.detail
      console.log(this.pkmnDetail)
    })
  }
}
</script>


<style lang="scss" scoped>
.detail {
  margin-top: 30px;
  margin-bottom: 30px;

  h1.name {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
}


</style>
