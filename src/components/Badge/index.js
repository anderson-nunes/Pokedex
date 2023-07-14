import React from 'react'
import { useContext } from 'react';
import * as S from './styles';
import { PokemonCardContext } from '../../contexts/PokemonCardContext';

export const Badge = () => {

  const { itemAmount } = useContext(PokemonCardContext)

  return (
    <S.BadgeStyle>
      {itemAmount}
    </S.BadgeStyle>
  )
}

