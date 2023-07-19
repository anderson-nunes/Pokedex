import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import * as S from './styles'
import { PokemonContext } from '../../contexts/PokemonContext'

import { useParams } from 'react-router-dom'

export const PokemonDetailPage = () => {

  const { name } = useParams()

  const { pokemons } = useContext(PokemonContext)


  const pokemon = pokemons.find(
    (pokemon) => pokemon.data.name === name.toLowerCase()
  );

  console.log('Pokemons Aqui =>>', pokemons)

  console.log(pokemon)

  return (
    <div>
      <Header />
      <S.Title>
        <h1>Detalhes</h1>
      </S.Title>
      <S.ContainerDetailPage>
        <S.ContainerDetailPokemon>
          <S.Image01>
            <S.FirstImage>
              <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
            </S.FirstImage>
            <S.SecondImage>
              <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.back_default} alt="" />
            </S.SecondImage>
            <h3>{pokemon.data.name}</h3>
          </S.Image01>
          {/* <S.Image02>
            <S.ImageColumn>
              <img src="" alt="" />

            </S.ImageColumn>
          </S.Image02> */}
        </S.ContainerDetailPokemon>
      </S.ContainerDetailPage>

    </div>
  )
}

