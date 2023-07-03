import { LazyPokes } from '../types/poke'

export const ListAllPokemons = async (uri: string): Promise<LazyPokes> => {
  const res = await fetch(uri).then((res) => res.json())

  const promises = res.results.map(
    async (pokemon: { url: string }) =>
      await fetch(pokemon.url).then((res) => res.json())
  )

  res.results = await Promise.all(promises)

  return res
}
