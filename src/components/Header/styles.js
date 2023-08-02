import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 160px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const ButtonListPage = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  cursor: pointer;
  text-decoration: underline;
  color: #000;
  position: absolute;
  left: 5%;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const Logo = styled.img`
  width: 307px;
  height: 113px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const Button = styled.button`
  width: 287px;
  height: 74px;
  padding: 4px 10px;
  background-color: #33A4F5;
  color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-right: 2rem;
  cursor: pointer;
`;

export const ButtonDetail = styled.button`
  width: 226px;
   height: 57px;
   border-radius: 8px;
   padding: 4px 10px;
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   color: #fff;
   border: none;
  cursor: pointer;

   outline: none;
   margin-left: 85rem;
  background-color:${props => (props.backgroundColor)};

  @media screen and (min-width: 280px) and (max-width: 450px){
    width: 18vw;
    height: 4vh;
    font-size: .5em;
    right: 2%;
  }

  @media screen and (min-width: 2000px) {
    width:8vw;
    font-size:0.85em;
  }
`;


