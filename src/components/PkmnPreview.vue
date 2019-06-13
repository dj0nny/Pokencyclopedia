<template>
  <div class="col-md-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <a href="#" class="btn btn-primary">View Details</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PkmnPreview extends Vue {
  @Prop() pokemon?: any
}
</script>

<style lang="scss" scoped>
.pkmn-list {
  margin-top: 50px;
  margin-bottom: 50px;

  .card {
    margin: 20px;
    text-align: center;

    h5.card-title {
      text-transform: capitalize;
      margin-bottom: 20px;
    }
    
  }
  
}
</style>

