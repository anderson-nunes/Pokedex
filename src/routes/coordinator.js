export const goToPokemonListPage = (navigate) => {
  navigate('/')
}

export const goToPokedexPage = (navigate) => {
  navigate('/pokedexPage')
}


export const goToPokemonDetailPage = (navigate, name, types) => {
  navigate(`/detailPage/${name}/${types}`)
}