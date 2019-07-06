<template>
  <div class="move-list-table">
    <div class="table-responsive">
      <table class="table">
        <!-- {{moves}} -->
        <thead>
          <tr>
            <th scope="col">Move name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in moves" :key="index">
            <!-- {{item.version_group_details}} -->
            <td class="pokemon-name">{{ item.move.name }}</td>
            <td class="pokemon-name" v-for="(item2, index2) in item.version_group_details" :key="index2">{{ item2 }}</td>
            <!-- <td class="is-hidden"><b-form-checkbox :checked="item.is_hidden" disabled></b-form-checkbox></td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MovesList extends Vue {
  @Prop() moves?: any
}
</script>

<style scoped>
.moves {
    margin-top: 35px;
}
</style>

