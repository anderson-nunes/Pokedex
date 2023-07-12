import React, { useContext } from 'react'
import * as S from './styles'
import { Header } from '../../components/Header'
import { Card } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export const PokemonListPage = ({ types }) => {

  const { pokemons, setPokemons } = useContext(PokemonContext)

  return (
    <>
      <Header />
      <S.Title>
        <h1>Todos Pokémons</h1>
      </S.Title>
      <S.ContainerCard>
        {pokemons.map((pokemon) => {
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
            />
          )
        })}
      </S.ContainerCard>
    </>
  )
}

