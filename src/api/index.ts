import axios from 'axios';

import { PkmnListResponse } from '../store/models'

export const APIcall = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export async function getPokemon() {
  const res = await axios.get('/pokemon?limit=964')
  return res.data as PkmnListResponse
}