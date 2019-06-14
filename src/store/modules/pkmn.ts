import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store'
import { PkmnListResponse, PkmnResponse } from '@/store/models'
import * as API from '@/api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'pkmn',
  store
})
class PkmnModule extends VuexModule{
  list: PkmnListResponse[] = []
  detail: PkmnResponse[] = []

  @Mutation
  SET_LIST(pkmnList: PkmnListResponse[]) {
    this.list = pkmnList
  }

  @Mutation
  SET_DETAIL(pkmnDetail: PkmnResponse[]) {
    this.detail = pkmnDetail
  }

  @Action({ commit: 'SET_LIST' })
  async getPkmnList() {
    const response = await API.getPokemon()
    return response
  }

  @Action({ commit: 'SET_DETAIL' })
  async getDetail(name: string) {
    const response = await API.getPokemonDetail(name)
    return response
  }
}

export default getModule(PkmnModule)