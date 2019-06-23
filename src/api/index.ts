import { PkmnListResponse, PkmnResponse, AbilitiesListResponse, AbilityDetailsResponse } from '../store/models'

const Pokedex = require('pokedex-promise-v2');

export const P = new Pokedex()

export async function getPokemon() {
  const response = await P.resource(['/api/v2/pokemon?limit=964'])
  return response[0] as PkmnListResponse
}

export async function getPokemonDetail(Pkmnname: string) {
  const response = await P.getPokemonByName(`${Pkmnname}`)
  return response as PkmnResponse
}

export async function getAbilitiesList() {
  const response = await P.resource(['/api/v2/ability?limit=293'])
  return response as AbilitiesListResponse
}

export async function getAbilityDetail(abilityName: string) {
  const response = await P.resource(`/api/v2/ability/${abilityName}`)
  return response as AbilityDetailsResponse
}