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
          {/* <S.Header>
        {location.pathname.includes("pokedexPage") ||
          location.pathname.includes("detailPage") ? (
          <S.ButtonListPage
            onClick={() => {
              goToPokemonListPage(navigate);
            }}
          >
            Todos os Pokemons
          </S.ButtonListPage>
        ) : (
          <S.ButtonContainer>
            <S.Button
              backgroundColor="#33A4F5"
              onClick={() => {
                goToPokedexPage(navigate);
              }}
            >
              Pokedex
            </S.Button>
          </S.ButtonContainer>
        )}

        <S.LogoContainer>
          <S.Logo src={logo} alt="Logo Pokémon" />
        </S.LogoContainer>

        {location.pathname.includes("detail") &&
          (pokemonCart ? (
            <S.ButtonDetail
              backgroundColor="#33A4F5"
            // onClick={() => addPokemonToCart()}
            >
              Adicionar a Pokedex
            </S.ButtonDetail>
          ) : (
            <S.ButtonDetail
              backgroundColor="#FF6262"
            // onClick={() => removePokemon()}
            >
              Remover da Pokedex
            </S.ButtonDetail>
          ))
        }
      </S.Header> */}
      <S.Header>

        {location.pathname !== '/' &&
          <S.ButtonListPage onClick={() => goToPokemonListPage(navigate)}>
            Todos Pokémons
          </S.ButtonListPage>
        }

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

