<template>
  <PkmnList></PkmnList>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PkmnList from '@/components/PkmnList.vue'

@Component({
  components: {
    PkmnList
  }
})
export default class Home extends Vue { }

</script>
