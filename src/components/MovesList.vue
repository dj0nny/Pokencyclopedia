<template>
  <div>
    {{moves}}
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

