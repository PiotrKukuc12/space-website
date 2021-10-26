import styled from '@emotion/styled';

const PlanetButton = styled.button`
  font-size: 1.5rem;
  padding: 4px 0px;
  color: white;
  height: 100%;

  &:hover {
    text-decoration: underline 20%;
    text-underline-offset: 60%;
    text-decoration-color: gray;
  }

  


`;

const ButtonPl = ({ children, clickFunc, planet, numb }) => {
  return (
    <PlanetButton
      onClick={clickFunc}
      style={
        planet === numb
          ? {
              textDecoration: 'underline',
              textUnderlineOffset: '60%',
              textDecorationThickness: '20%',
            }
          : {}
      }
    >
      {children}
    </PlanetButton>
  );
};

export default ButtonPl;
