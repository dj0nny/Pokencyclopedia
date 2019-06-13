<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue { }

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html {
  font-family: 'Montserrat'
}

.btn-primary {
    color: #fff !important;
    background-color: #ef5350 !important;
    border-color: #ef5350 !important;
}

.btn-primary:hover {
    color: #000 !important;
    background-color: #fff !important;
    border-color: #ef5350 !important;
}
</style>
