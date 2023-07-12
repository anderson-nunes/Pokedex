import * as S from './styles';
import logo from '../../assets/logo.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonCardContext } from '../../contexts/PokemonCardContext';

export const Header = () => {

  const { pokemonCart, pokemons, itemAmount } = useContext(PokemonCardContext)

  console.log('Pega Pokemon =>', itemAmount)

  return (
    <>
      <S.Header>
        <S.LogoContainer>
          <S.Logo src={logo} alt="Logo Pokémon" />
        </S.LogoContainer>
        <S.ButtonContainer>
          <Link to={`/pokedexPage`}>
            <S.Button>
              {pokemons}
              Pokédex</S.Button>
          </Link>
        </S.ButtonContainer>
      </S.Header>
    </>
  );
};

