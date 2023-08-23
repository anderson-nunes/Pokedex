import { createContext, useEffect, useState } from "react";

export const PokemonCardContext = createContext()

const PokemonCardProvider = ({ children }) => {

  const initialPokemonAdded = localStorage.getItem('pokemonCart')

  const [pokemonCart, setPokemonCart] = useState(JSON.parse(initialPokemonAdded) || [])

  const [itemAmount, setItemAmount] = useState(0);

  const [modalPokemon, setModalPokemon] = useState(false)
  const [modalStatus, setModalStatus] = useState()


  useEffect(() => {
    if (pokemonCart) {
      const amount = pokemonCart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)

      setItemAmount(amount)
    }
  }, [pokemonCart])

  const addPokemonToCart = (pokemon) => {

    const newCart = [...pokemonCart, pokemon]

    setPokemonCart(newCart)

    setModalPokemon(true)
    setModalStatus(0)
  }

  const removePokemon = (id) => {

    const removePokemonItem = pokemonCart.filter((item) => {

      return id !== item.data.id
    })

    setPokemonCart(removePokemonItem)

    setModalPokemon(true)
    setModalStatus(1)
  }

  useEffect(() => {

    if (pokemonCart.length >= 0) {
      localStorage.setItem('pokemonCart', JSON.stringify(pokemonCart))
    }
  }, [pokemonCart])

  console.log('HELOOOOO', pokemonCart)


  return (
    <PokemonCardContext.Provider
      value={{
        pokemonCart,
        setPokemonCart,
        itemAmount,
        setItemAmount,
        addPokemonToCart,
        removePokemon,
        modalPokemon,
        setModalPokemon,
        modalStatus,
        setModalStatus,
      }}
    >
      {children}
    </PokemonCardContext.Provider>
  )
}

export default PokemonCardProvider