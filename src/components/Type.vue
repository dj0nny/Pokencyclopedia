<template>
    <div class="types">
      <div class="row">
        <div class="col-md-6" v-for="item in types" :key="item.type.name">
          <img :src="`https://raw.githubusercontent.com/dj0nny/pokencyclopedia/develop/src/assets/${item.type.name}.png`">
        </div>
      </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Ability extends Vue {
  @Prop() types?: any
}
</script>