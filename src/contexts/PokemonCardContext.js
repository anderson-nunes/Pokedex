import { createContext, useEffect, useState } from "react";

export const PokemonCardContext = createContext()

const PokemonCardProvider = ({ children }) => {

  const [pokemonCart, setPokemonCart] = useState([])

  const [itemAmount, setItemAmount] = useState(0);


  useEffect(() => {
    if (pokemonCart) {
      const amount = pokemonCart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)

      setItemAmount(amount)
    }
  }, [pokemonCart])



  const addPokemonToCart = (pokemons, name) => {

    const existingItem = pokemonCart.find((item) => item.data.name === name);

    if (existingItem) {
      // Se o item já estiver na pokebola, exibe a mensagem e não adiciona novamente
      alert(
        "Esse Pokemon Já Foi Capturado em Nosso Sistema Não Podemos Capturar Novamente"
      );
      return;
    }

    const newItem = { ...pokemons, amount: 1 }

    const cartPokemon = pokemonCart.find((item) => {

      return item.name === name
    })

    if (cartPokemon) {

      const newCart = [...pokemonCart].map((item) => {

        if (item.name === name) {

          return { ...item, amount: cartPokemon.amount + 1 }

        } else {

          return item
        }
      })
      setPokemonCart(newCart)

    } else {
      setPokemonCart([...pokemonCart, newItem])
    }

  }

  return (
    <PokemonCardContext.Provider
      value={{
        pokemonCart,
        setPokemonCart,
        itemAmount,
        setItemAmount,
        addPokemonToCart
      }}
    >
      {children}
    </PokemonCardContext.Provider>
  )
}

export default PokemonCardProvider