import styled from 'styled-components';

export const ContainerCard = styled.div`

  max-width: 100%;
  min-height: 80vh;
  background-color: #5E5E5E;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 4rem;
`

export const ContainerPokedex = styled.div`

  width: 440px;
  height: 210px;
  border-radius: 12px;
  border: 1px solid black;

  h2, p {
  color: #fff;
  }

  h1 {
  background-color: red;
  color: white;
  }

`

export const ContainerFigure = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const ContainerImage = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  /* width: 210.73px;
  height: 210.73px; */
`;

export const PokemonImage = styled.img`
  position: relative;
  z-index: 1;
  width: 193px;
  height: 193px;
  margin: -3rem 0.5rem;
`;



export const ContainerStylePokemon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.5rem;
`

export const StylePokemon = styled.span`
  width: 91px;
  height: 31px;
  border-radius: 8px;
  border: 1px;
  padding: 5px 8px;
  /* background-color: #fff; */
  margin-left: 0.5rem;
  color: black;

`
export const DetailPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
  }

`

export const Delete = styled.div`

  button {
  width: 146px;
  height: 38px;
  border-radius: 8px;
  padding: 4px 10px;
  background-color: #FF6262;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
  }
`

export const Title = styled.div`
  max-width: 100%;
  height: 120px;
  padding: 0.5rem;
  background-color: #5E5E5E;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 72px;
  padding-left: 14rem;
`
