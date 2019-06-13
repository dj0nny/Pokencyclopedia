<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Made with ️️❤️ by <a href="https://github.com/dj0nny" target="_blank">dj0nny</a> &copy; {{ year }}
        </div>
      </div>
    </div>
  </footer>
</template>


<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Footer extends Vue { 
  year = new Date().getFullYear()
}
</script>


<style lang="scss" scoped>
footer {
  background-color: #f7f7f7;
  padding: 20px;
  border-top: 1px solid #ccc;
}
</style>
