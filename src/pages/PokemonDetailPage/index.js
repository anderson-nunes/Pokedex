import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { PokemonContext } from '../../contexts/PokemonContext'
import typeImagesPokemons from '../../assetsTypesPokemons/dataTypesPokemons/dataTypesPokemons'
import { useParams } from 'react-router-dom'
import * as S from './styles'

export const PokemonDetailPage = () => {

  const { name, type } = useParams()

  const { pokemons } = useContext(PokemonContext)

  const pokemon = pokemons.find(
    (pokemon) => pokemon.data.name === name.toLowerCase()
  );

  const elementPokemon = pokemon.data.types.map((type) => {
    const typeImage = typeImagesPokemons[type.type.name.toLowerCase()]
    return <img src={typeImage} alt={type.type.name} key={type.type.name} />
  })

  let color;
  switch (pokemon.data.types[0].type.name) {
    case "grass":
      color = "#729F92";
      break;
    case "fire":
      color = "#EAAB7D";
      break;
    case "water":
      color = "#71C3FF";
      break;
    case "bug":
      color = "#76A866";
      break;
    case "normal":
      color = "#BF9762";
      break;
    default:
      color = "transparent";
  }

  return (
    <div>
      <Header />
      <S.Title>
        <h1>Detalhes</h1>
      </S.Title>
      <S.ContainerDetailPage >
        <S.ContainerDetailPokemon style={{ backgroundColor: color }}>
          <S.Image01>
            <S.FirstImage>
              <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
            </S.FirstImage>
            <S.SecondImage>
              <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.back_default} alt="" />
            </S.SecondImage>
          </S.Image01>
          <S.Image02>
            <S.ImageColumn>
              <img src="" alt="" />
            </S.ImageColumn>
          </S.Image02>

          <S.ThirdImage>
            <S.PokemonStatus>
              <span>
                {pokemon.data.id < 10 ?
                  `#0${pokemon.data.id}` :
                  `#${pokemon.data.id}`}
              </span>
              <h2>{pokemon.data.name.charAt(0).toUpperCase() +
                pokemon.data.name.slice(1)}
              </h2>

              <S.StylePokemon>
                <span>
                  {elementPokemon}
                </span>
              </S.StylePokemon>

            </S.PokemonStatus>
            <S.Image03>

            </S.Image03>
          </S.ThirdImage>

          <S.FourthImage>
            <img src={pokemon.data.sprites.other["official-artwork"].front_default} alt="" />
          </S.FourthImage>

        </S.ContainerDetailPokemon>
      </S.ContainerDetailPage>

    </div>
  )
}

