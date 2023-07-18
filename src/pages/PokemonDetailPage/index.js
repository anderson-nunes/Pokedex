import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import * as S from './styles'
import { PokemonCardContext } from '../../contexts/PokemonCardContext'

export const PokemonDetailPage = () => {

  const { pokemonCart } = useContext(PokemonCardContext)

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
              <img src="" alt="" />
            </S.FirstImage>
            <S.SecondImage>
              <img src="" alt="" />
            </S.SecondImage>
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

