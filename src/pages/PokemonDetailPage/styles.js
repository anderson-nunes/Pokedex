import styled from 'styled-components';
import background from '../../assets/background.png'

export const ContainerDetailPage = styled.div`
  max-width: 100%;
  height: 85vh;
  background-color: #5E5E5E;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position-x: 30%;
`

export const ContainerDetailPokemon = styled.div`
  border-radius: 38px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 37px;
  background-image: url(${background});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
`

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const ImageOne = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }
`

export const ImageTwo = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;  
  }
`

export const ContainerBaseStats = styled.div`
  width: 343px;
  height: 613px;
  border-radius: 12px;
  display: flex;
  background-color: white;
`

export const DetailBaseStats = styled.div`
  width: 307px;
  height: 257px;
  background-color: #fff;
  margin: 1rem;

  h3 {
    font-size:24px;
    font-weight: 800;
    line-height: 29.05px;
  }
`

export const BaseStats = styled.div`
  border-bottom: 1px solid #f1f1f1;
  display: grid;
  grid-template: 1fr / 25% 10% 1fr;
  gap: 15px;
  height: 2rem;

  > p {
    margin: auto 0px;
  }
`;

export const StatsAttack = styled.p`
  text-align: right;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StatsBase = styled.p`
  text-align: right;
`;

export const ProgressionBar = styled.div`
  --progress: calc((${(prop) => prop.base} / 80) * 100);
  display: flex;
  padding: 0.6rem;

  &::before {
    content: "";
    border-radius: 8px;
    width: calc(var(--progress) * 1%);
    background-color: hsl(var(--progress), 70%, 50%);
  }
`;

export const ContainerMove = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

export const DetailStatus = styled.div`
  width: 292px;
  color: #fff;

  span {
  width: 30px;
  height: 19px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  }

  h2 {
  font-size: 48px;
  font-weight: 700;
  line-height: 58.09px;
  margin-top: 0;
  }
`

export const ContainerDetailMoves = styled.div`
  width: 292px;
  height: 453px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 5rem;

    h3 {
    font-size:24px;
    font-weight: 800;
    line-height: 29.05px;
  }
`

export const ContainerMoves = styled.div`
  margin: 1rem;
`

export const DetailMoves = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 350px;
  margin-top: 1rem;
  overflow-y: auto;
`

export const Moves = styled.div`
  background-color: #ececec;
  border: 1px dashed #00000024;
  border-radius: 12px;
  align-self: flex-start;
  padding: 8px 10px;
`;

export const DetailImagePokemon = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  width: 270px;

  img {
    position: absolute;
    top: -140px;
    width: 270px;
    height: 270px;
  }
`

export const DetailStyle = styled.div`
  
  span {
  position: absolute;
  width: 91px;
  height: 31px;
  border-radius: 8px;
  border: 1px;
  display: flex;
  gap: .5rem;
  margin-top: 1rem;
  }
`

export const Title = styled.div`
  max-width: 100%;
  height: 100px;
  padding: 2.5rem;
  background-color: #5E5E5E;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  padding-left: 17rem;
`



