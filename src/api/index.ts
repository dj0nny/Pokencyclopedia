import axios from 'axios';

import { PkmnListResponse, PkmnResponse } from '../store/models'

export const APIcall = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export async function getPokemon() {
  const res = await axios.get('/pokemon?limit=964')
  return res.data as PkmnListResponse
}

export async function getPokemonDetail(Pkmnname: string) {
  const res = await axios.get(`/pokemon/${Pkmnname}`)
  return res.data as PkmnResponse
}