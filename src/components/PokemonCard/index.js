import { Link } from 'react-router-dom';
import typeImagesPokemons from '../../assetsTypesPokemons/dataTypesPokemons/dataTypesPokemons'
import pokeBola from '../../assets/pokeBola.png'
import * as S from './styles'
import { Header } from '../Header';
import { PokemonCardContext } from '../../contexts/PokemonCardContext';
import { useContext } from 'react';


export const Card = ({ image, name, types, id, pokemon }) => {

  console.log('valor type => ', types)

  const { addPokemonToCart } = useContext(PokemonCardContext)

  console.log('capturando o pokemon', addPokemonToCart)


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
        <S.StylePokemon>
          <span>{types}</span>
        </S.StylePokemon>
        <S.StylePokemon>
          {/* <span>Poison</span> */}
        </S.StylePokemon>
      </S.ContainerStylePokemon>
      <S.DetailPokemon>
        <Link to={`/detailPage`}>
          <a>Detalhes</a>
        </Link>
        <S.Capture>
          <button onClick={() => addPokemonToCart(pokemon, name)}>Capturar!</button>
        </S.Capture>
      </S.DetailPokemon>
    </S.ContainerCard>
  )
}

