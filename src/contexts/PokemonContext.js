import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {

    let pokemonsPoints = []

    for (let i = 1; i < 23; i++) {
      pokemonsPoints.push(`${BASE_URL}/${i}`)
    }

    await axios
      .all(pokemonsPoints.map((pokemonsPoint) => axios.get(pokemonsPoint)))
      .then((response) => {
        setPokemons(response);
        setIsLoading(false)
        setTimeout(() => setIsLoading(false), 3000)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
        console.log(error)
      })
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        // getPokemons,
        isLoading,
        isError
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider