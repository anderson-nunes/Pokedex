import typesPokemons from '../../assets/typesPokemons/dataTypesPokemons/dataTypesPokemons'
import pokeBola from '../../assets/pokeBola.png'
import { PokemonCardContext } from '../../contexts/PokemonCardContext';
import { goToPokemonDetailPage } from '../../routes/coordinator';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles'

export const Card = ({ image, name, types, id, pokemon }) => {

  const { addPokemonToCart, removePokemon } = useContext(PokemonCardContext)

  const navigate = useNavigate()

  const location = useLocation()

  let backgroundColor;
  const pokemonTypes = types.split(" ")

  switch (pokemonTypes[0]) {
    case "grass":
      backgroundColor = "#AD61AE"
    case "poison":
      backgroundColor = "#729F92";
      break;
    case "fire":
      backgroundColor = "#EAAB7D";
      break;
    case "water":
      backgroundColor = "#71C3FF";
      break;
    case "bug":
      backgroundColor = "#76A866";
      break;
    case "normal":
      backgroundColor = "#BF9762";
      break;
    case "dragon":
      backgroundColor = "#004170";
      break;
    default:
      backgroundColor = "transparent";
  }

  const capitalFirstLetter = name;
  const newName = capitalFirstLetter[0].toUpperCase() + capitalFirstLetter.substr(1);

  return (
    <S.ContainerCard style={{ backgroundColor }}>
      <S.ContainerFigure>
        <div>
          <p>{id < 10 ? ` #0${id}` : `#${id}`}</p>
          <h2>{newName}</h2>
        </div>
        <S.ContainerImage>
          <S.BackgroundImage src={pokeBola} alt="Poke Bola" />
          <S.PokemonImage src={image} alt="Pokémon" />
        </S.ContainerImage>
      </S.ContainerFigure>
      <S.ContainerStylePokemon>
        {pokemonTypes.map((type, index) => (
          <S.StylePokemon key={index}>
            <span>
              <img src={typesPokemons[type]} alt={type} />
            </span>
          </S.StylePokemon>
        ))}
      </S.ContainerStylePokemon>
      <S.DetailPokemon>
        <a onClick={() => goToPokemonDetailPage(navigate, name, types, id)}>Detalhes</a>
        {location.pathname === '/' &&
          <S.Capture>
            <button onClick={() => addPokemonToCart(pokemon)}>Capturar!</button>
          </S.Capture>
        }
        {location.pathname === '/pokedexPage' &&
          <S.Delete>
            <button onClick={() => removePokemon(id)}>Excluir</button>
          </S.Delete>
        }
      </S.DetailPokemon>
    </S.ContainerCard>
  )
}

