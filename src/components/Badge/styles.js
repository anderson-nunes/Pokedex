import styled from 'styled-components';

export const BadgeStyle = styled.div`
  width:20px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: red;
  border-radius: 10px;
  color: #fff;
  position: absolute;
  top: 32px;
  right: 18px;

  @media (max-width: 930px){
  
    right: 60px;
  }  
`;
