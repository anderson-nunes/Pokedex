import React from 'react'
import { Header } from '../../components/Header'
import * as S from './styles'

export const PokemonDetailPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Detalhes</h1>
      </div>
      <S.ContainerDetailPage>
        <S.ContainerDetailPokemon>
          <div>
            <h2>POKEMON</h2>
          </div>
        </S.ContainerDetailPokemon>
      </S.ContainerDetailPage>

    </div>
  )
}

