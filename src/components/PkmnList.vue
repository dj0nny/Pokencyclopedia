<template>
  <div class="pkmn-list">
    <div class="row">
      <PkmnPreview v-for="pkmn in pkmnList.results" :key="pkmn.name" :pokemon="pkmn"></PkmnPreview>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import pkmn from '@/store/modules/pkmn'
import { PkmnListResponse } from '@/store/models'

import * as API from '@/api'

import PkmnPreview from '@/components/PkmnPreview.vue'

@Component({
  components: {
    PkmnPreview
  }
})
export default class PkmnList extends Vue {
  pkmnList?: PkmnListResponse[] = []

  async created() {
    await pkmn.getPkmnList().then(() => {
      this.pkmnList = pkmn.list
      console.log(this.pkmnList)
    })
  }
}

</script>
