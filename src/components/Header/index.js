import * as S from './styles';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonCardContext } from '../../contexts/PokemonCardContext';
import { goToPokedexPage, goToPokemonListPage } from '../../routes/coordinator';
import { Badge } from '../Badge';

export const Header = () => {

  const { pokemons } = useContext(PokemonCardContext)

  const location = useLocation()

  const navigate = useNavigate()

  return (
    <>
      <S.Header>
        {location.pathname !== '/' &&
          <S.ButtonListPage onClick={() => goToPokemonListPage(navigate)}>
            Todos Pokémons
          </S.ButtonListPage>}
        <S.LogoContainer>
          <S.Logo src={logo} alt="Logo Pokémon" />
        </S.LogoContainer>
        {location.pathname === '/' ?
          <S.ButtonContainer>
            <S.Button onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </S.Button>
            <Badge>{pokemons}</Badge>
          </S.ButtonContainer> :
          location.pathname.includes('/detailPage') &&
          <S.ButtonDeletePokemon>Excluir da Pokédex</S.ButtonDeletePokemon>
        }
      </S.Header>
    </>
  );
};

