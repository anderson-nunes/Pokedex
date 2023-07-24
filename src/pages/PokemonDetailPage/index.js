import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { PokemonContext } from '../../contexts/PokemonContext'
import typeImagesPokemons from '../../assetsTypesPokemons/dataTypesPokemons/dataTypesPokemons'
import { IsLoading } from '../../components/Loading'
import { useParams } from 'react-router-dom'
import * as S from './styles'

export const PokemonDetailPage = () => {

  const { name } = useParams()

  const { pokemons, isLoading, isError } = useContext(PokemonContext)

  const pokemon = pokemons.find(
    (pokemon) => pokemon.data.name === name.toLowerCase()
  );

  if (!pokemon) {
    // Se o Pokémon não for encontrado, pode exibir uma mensagem de erro ou redirecionar para uma página de erro
    return <div>{isError}</div>;
  }

  const elementPokemon = pokemon.data.types.map((type) => {
    const typeImage = typeImagesPokemons[type.type.name.toLowerCase()]
    return <img src={typeImage} alt={type.type.name} key={type.type.name} />
  })

  const totalStats =
    pokemon && pokemon.data.stats.reduce((total, stat) => {
      return total + stat.base_stat;
    }, 0);


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
        {isError ? <p>ERRO!! TENTE NOVAMENTE</p> :
          isLoading ? <IsLoading /> :
            <S.ContainerDetailPokemon style={{ backgroundColor: color }}>
              <S.ContainerImages>
                <S.ImageOne>
                  <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="" />
                </S.ImageOne>
                <S.ImageTwo>
                  <img src={pokemon.data.sprites.versions["generation-v"]["black-white"].animated.back_default} alt="" />
                </S.ImageTwo>
              </S.ContainerImages>
              <S.ContainerBaseStats>
                <S.DetailBaseStats>
                  <h3>Base stats</h3>
                  {pokemon.data.stats.map((stat) => {
                    return (
                      <S.BaseStats key={stat.stat.name}>
                        <S.StatsAttack>
                          {stat.stat.name === "hp"
                            ? "HP"
                            : stat.stat.name === "special-attack"
                              ? "Sp. Atk"
                              : stat.stat.name === "special-defense"
                                ? "Sp. Def"
                                : stat.stat.name}
                        </S.StatsAttack>
                        <S.StatsBase>{stat.base_stat}</S.StatsBase>
                        <S.ProgressionBar base={stat.base_stat}></S.ProgressionBar>
                      </S.BaseStats>
                    )
                  })}
                  <S.BaseStats>
                    <S.StatsAttack>Total</S.StatsAttack>
                    <S.StatsBase>
                      <strong>{totalStats}</strong>
                    </S.StatsBase>
                  </S.BaseStats>
                </S.DetailBaseStats>
              </S.ContainerBaseStats>

              <S.ContainerMove>
                <S.DetailStatus>
                  <span>
                    {pokemon.data.id < 10 ?
                      `#0${pokemon.data.id}` :
                      `#${pokemon.data.id}`}
                  </span>
                  <h2>{pokemon.data.name.charAt(0).toUpperCase() +
                    pokemon.data.name.slice(1)}
                  </h2>

                  <S.DetailStyle>
                    <span>
                      {elementPokemon}
                    </span>
                  </S.DetailStyle>
                </S.DetailStatus>
                <S.ContainerDetailMoves>


                </S.ContainerDetailMoves>
              </S.ContainerMove>

              <S.DetailImagePokemon>
                <img src={pokemon.data.sprites.other["official-artwork"].front_default} alt="" />
              </S.DetailImagePokemon>

            </S.ContainerDetailPokemon>
        }
      </S.ContainerDetailPage>
    </div>
  )
}

