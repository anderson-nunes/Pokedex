import React, { useContext } from 'react'
import pokeBola from '../../assets/pokeBola.png'
import { Header } from '../../components/Header'
import { PokemonCardContext } from '../../contexts/PokemonCardContext'
import typeImagesPokemons from '../../assetsTypesPokemons/dataTypesPokemons/dataTypesPokemons'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { Card } from '../../components/PokemonCard'

export const PokedexPage = () => {

  const { pokemonCart } = useContext(PokemonCardContext)

  // const backgroundPokemon = (item, index) => {
  //   const position = index % 2;

  //   let type = item.data.types[0].type.name;

  //   console.log('tipo do pokemon', type)

  //   switch (type) {
  //     case "grass":
  //       return position === 0 ? "#729F92" : "#729F92";

  //     case "poison":
  //       return position === 0 ? "#AD61AE" : "#AD61AE";

  //     case "fire":
  //       return position === 0 ? "#EAAB7D" : "#EAAB7D";

  //     case "water":
  //       return position === 0 ? "#71C3FF" : "#71C3FF";

  //     case "bug":
  //       return position === 0 ? "#76A866" : "#76A866";

  //     case "normal":
  //       return position === 0 ? "#BF9762" : "#BF9762";

  //     case "dragon":
  //       return position === 0 ? "#004170" : "#004170";

  //     default:
  //       return "transparent";
  //   }
  // };

  return (
    <>
      <Header />
      <S.ContainerCard >
        {pokemonCart.map((pokemon) => {
          const types = pokemon.data.types
            .map((types) => types.type.name)
            .join(" ")
          return (
            <Card
              pokemon={pokemon}
              image={pokemon.data.sprites.other.dream_world.front_default}
              name={pokemon.data.name}
              types={types}
              key={pokemon.data.id}
              id={pokemon.data.id}
            />
          )
        })}
        {/* {pokemonCart.map((item, index) => (
          <S.ContainerPokedex key={index} style={{ backgroundColor: backgroundPokemon(item) }}>
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
              {item.data.types.map((type, typeIndex) => (
                <S.StylePokemon key={typeIndex}>
                  <span>
                    <img src={typeImagesPokemons[type.type.name]} alt={type.type.name} />
                  </span>
                </S.StylePokemon>
              ))}
            </S.ContainerStylePokemon>
            <S.DetailPokemon>
              <Link to={`/detailPage`}>
                <a>Detalhes</a>
              </Link>
              <S.Delete>
                <button>Excluir</button>
              </S.Delete>
            </S.DetailPokemon>
          </S.ContainerPokedex>
        ))} */}
      </S.ContainerCard>
    </>
  )
}


