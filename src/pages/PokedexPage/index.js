import React, { useContext } from 'react'
import pokeBola from '../../assets/pokeBola.png'
import { Header } from '../../components/Header'
import { PokemonCardContext } from '../../contexts/PokemonCardContext'
import { Link } from 'react-router-dom'
import * as S from './styles'

export const PokedexPage = ({ name, types }) => {

  const { pokemonCart } = useContext(PokemonCardContext)

  console.log('Pokemonsss =>', pokemonCart)


  // let backgroundColor;
  // const pokemonTypes = types.data.types.split(" ")

  // switch (pokemonTypes[0]) {
  //   case "grass":
  //     backgroundColor = "#AD61AE"
  //   case "poison":
  //     backgroundColor = "#729F92";
  //     break;
  //   case "fire":
  //     backgroundColor = "#EAAB7D";
  //     break;
  //   case "water":
  //     backgroundColor = "#71C3FF";
  //     break;
  //   case "bug":
  //     backgroundColor = "#76A866";
  //     break;
  //   case "normal":
  //     backgroundColor = "#BF9762";
  //     break;
  //   case "dragon":
  //     backgroundColor = "#004170";
  //     break;
  //   default:
  //     backgroundColor = "transparent";
  // }

  return (
    <>
      <Header />
      <S.ContainerCard >
        {pokemonCart.map((item) => (

          <S.ContainerPokedex >
            <S.ContainerFigure>
              <div>
                <p>{item.data.id < 10 ? ` #0${item.data.id}` : `#${item.data.id}`}</p>
                <h2>{item.data.name}</h2>
              </div>
              <S.ContainerImage>
                <S.BackgroundImage src={pokeBola} alt="Poke Bola" />
                <S.PokemonImage src={item.data.sprites.other.dream_world.front_default} alt="Pokémon" />
              </S.ContainerImage>
            </S.ContainerFigure>
            <S.ContainerStylePokemon>
              <S.StylePokemon>
                <span>{''}</span>
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
                <button onClick={''}>Capturar!</button>
              </S.Capture>
            </S.DetailPokemon>
          </S.ContainerPokedex>
        ))}
      </S.ContainerCard>
    </>
  )
}


