// import React from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as S from './styles'

// export const Card = ({ image, name, types, count, getPokemons }) => {

//   let backgroundColor;
//   const pokemonTypes = types.split(" ")
//   switch (pokemonTypes[0]) {
//     case "grass":
//     case "poison":
//       backgroundColor = "#729F92";
//       break;
//     case "fire":
//       backgroundColor = "#EAAB7D";
//       break;
//     case "water":
//       backgroundColor = "#71C3FF";
//       break;
//     case "bug":
//       backgroundColor = "#76A866";
//       break;
//     case "normal":
//       backgroundColor = "#BF9762";
//       break;
//     case "dragon":
//       backgroundColor = "#004170";
//       break;
//     default:
//       backgroundColor = "transparent";
//   }

//   return (
//     <S.ContainerCard style={{ backgroundColor }}>
//       <S.FigurePokemon>
//         <div>
//           <p>#0{count}</p>
//           <h2>{name}</h2>
//         </div>
//         <div>
//           <img src={image} alt="Pokémon" />
//         </div>
//       </S.FigurePokemon>
//       <S.ContainerStylePokemon>
//         <S.StylePokemon>
//           <span>Grass</span>
//         </S.StylePokemon>
//         <S.StylePokemon>
//           <span>Poison</span>
//         </S.StylePokemon>
//       </S.ContainerStylePokemon>
//       <S.DetailPokemon>
//         <Link to='/detail'>
//           <a>Detalhes</a>
//         </Link>
//         <S.Capture>
//           <button>Capturar!</button>
//         </S.Capture>
//       </S.DetailPokemon>
//     </S.ContainerCard>
//   )
// }

