import { PkmnListResponse, PkmnResponse } from '../store/models'

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