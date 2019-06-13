import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store'
import { PkmnListResponse } from '@/store/models'
import * as API from '@/api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'pkmn',
  store
})
class PkmnModule extends VuexModule{
  list: PkmnListResponse[] = []

  @Mutation
  SET_LIST(pkmnList: PkmnListResponse[]) {
    this.list = pkmnList
  }

  @Action({ commit: 'SET_LIST' })
  async getPkmnList() {
    const response = await API.getPokemon()
    return response
  }
}

export default getModule(PkmnModule)