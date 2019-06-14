<template>
  <div class="row">
    <div class="col-md-12" v-for="ability in abilities" :key="ability.ability.name">
      <div class="ability-details">
        <div class="ability-type">
          <div :class="{ hidden: ability.is_hidden }" v-if="ability.is_hidden">
            <strong>Hidden ability:</strong> 
          </div>
          <div v-else>
            <strong>Ability:</strong> 
          </div>
        </div>
        <div class="ability-name">
          {{ ability.ability.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Ability extends Vue {
  @Prop() abilities?: any
}
</script>

<style lang="scss" scoped>
.ability-details {
    display: flex;

    .ability-name, .ability-type {
      flex: 1;
  }

  .ability-name {
    text-transform: capitalize;
  }
}
</style>

