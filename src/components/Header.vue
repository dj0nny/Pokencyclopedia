<template>
  <header>
    <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1><strong>Poke</strong>ncyclopedia</h1>
          </div>
          <div class="col-md-8">
            <b-nav align="right">
              <b-nav-item v-for="(link, index) in links" :key="index" :to="link.href" >{{link.name}}</b-nav-item>
              <b-nav-item target="_blank"  href="https://github.com/dj0nny/pokencyclopedia" class="external">View repository</b-nav-item>
            </b-nav>
          </div>
        </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue { 
  links: any = [
    {
      name: 'Pokèmon list',
      href: '/'
    },
    {
      name: 'moves',
      href: '/moves'
    },
    {
      name: 'items',
      href: '/items'
    },
    {
      name: 'abilities',
      href: '/abilities'
    },
    {
      name: 'encounters',
      href: '/encounters'
    },
  ]
}

</script>

<style lang="scss" scoped>
header {
  padding: 5px;
  background-color: #ef5350;
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  color: #fff;
  margin-bottom: 70px;

  ul.nav {
      margin-top: 5px;

      li a {
        color: #fff;
        text-transform: capitalize;

        &:hover {
          text-decoration: underline;
        }
      }

      li.external a {
        background: #fff;
        color: #000 !important;
      }
  }

}
</style>
