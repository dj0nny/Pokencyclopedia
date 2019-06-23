import { Module, VuexModule, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store'
import { PkmnListResponse, PkmnResponse, AbilitiesListResponse, AbilityDetailsResponse } from '@/store/models'
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
  abilities: AbilitiesListResponse[] = []
  abilityDetails: AbilityDetailsResponse[] = []

  @Mutation
  SET_LIST(pkmnList: PkmnListResponse[]) {
    this.list = pkmnList
  }

  @Mutation
  SET_DETAIL(pkmnDetail: PkmnResponse[]) {
    this.detail = pkmnDetail
  }

  @Mutation
  SET_ABILITIES_LIST(pkmnAbilitiesList: AbilitiesListResponse[]) {
    this.abilities = pkmnAbilitiesList
  }

  @Mutation
  SET_ABILITY_DETAIL(abilityDetail: AbilityDetailsResponse[]) {
    this.abilityDetails = abilityDetail
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

  @Action({ commit: 'SET_ABILITIES_LIST' })
  async getAbilities() {
    const response = await API.getAbilitiesList()
    return response
  }

  @Action({ commit: 'SET_ABILITY_DETAIL' })
  async getAbilityDetail(name: string) {
    const response = await API.getAbilityDetail(name)
    return response
  }
}

export default getModule(PkmnModule)