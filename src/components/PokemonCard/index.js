import React from 'react'
import * as S from './styles'

export const Card = () => {
  return (
    <S.ContainerCard>
      <S.NamePokemon>
        <p>#01</p>
        <h2>Pokémon</h2>
      </S.NamePokemon>
      <S.ContainerStylePokemon>
        <S.StylePokemon>
          <span>Grass</span>
        </S.StylePokemon>
        <S.StylePokemon>
          <span>Poison</span>
        </S.StylePokemon>
      </S.ContainerStylePokemon>
      <S.DetailPokemon>
        <div>
          <h3>Detalhes</h3>
        </div>
        <S.Capture>
          <button>Capturar!</button>
        </S.Capture>
      </S.DetailPokemon>
    </S.ContainerCard>
  )
}

