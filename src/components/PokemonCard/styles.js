import styled from 'styled-components';

export const ContainerCard = styled.div`

  width: 440px;
  height: 210px;
  border-radius: 12px;

  h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  }

  p {
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  color: #fff;
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
  width: 210.73px;
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
`

export const StylePokemon = styled.span`
  border-radius: 8px;
  border: 1px;
  padding: 5px 2px;
  margin-left: 0.5rem;
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
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`

export const Capture = styled.div`

  button {
  width: 146px;
  height: 38px;
  border-radius: 8px;
  padding: 4px 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
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