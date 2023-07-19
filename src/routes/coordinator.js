export const goToPokemonListPage = (navigate) => {
  navigate('/')
}

export const goToPokedexPage = (navigate) => {
  navigate('/pokedexPage')
}


export const goToPokemonDetailPage = (navigate, name) => {
  navigate(`/detailPage/${name}`)
}