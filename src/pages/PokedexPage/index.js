import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { PokemonCardContext } from '../../contexts/PokemonCardContext'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Card } from '../../components/PokemonCard'
import { IsLoading } from '../../components/Loading'
import * as S from './styles'

export const PokedexPage = () => {

  const { pokemonCart, removePokemon } = useContext(PokemonCardContext)
  const { isLoading, isError } = useContext(PokemonContext)

  return (
    <>
      <Header />
      <S.Title>
        <h1>Meus Pokémons</h1>
      </S.Title>
      <S.ContainerCard >
        {
          isError ? <p>ERRO!! TENTE NOVAMENTE</p> :
            isLoading ? <IsLoading /> :
              pokemonCart.map((pokemon) => {
                const types = pokemon.data.types
                  .map((types) => types.type.name)
                  .join(" ")
                return (
                  <Card
                    pokemon={pokemon}
                    image={pokemon.data.sprites.other.dream_world.front_default}
                    name={pokemon.data.name}
                    types={types}
                    key={pokemon.data.id}
                    id={pokemon.data.id}
                    removePokemon={removePokemon}
                  />
                )
              })}
      </S.ContainerCard>
    </>
  )
}


