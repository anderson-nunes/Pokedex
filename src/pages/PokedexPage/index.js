import React from 'react'
import * as S from './styles'
import { Header } from '../../components/Header'
import { Card } from '../../components/PokemonCard'

export const PokedexPage = () => {
  return (
    <>
      <Header />
      <S.ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.ContainerCard>
    </>
  )
}

