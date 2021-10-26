import styled from '@emotion/styled';

const ButtonTech = styled.button`
  color: white;
  padding: 10px 25px;
  border-radius: 100%;
  font-size: 1.5rem;
  background-color: none;
  border: 1px white solid;

  @media only screen and (min-width: 992px) {
    width: 80px;
    padding: 20px 30px;
    padding-left: 30px;
  }
`;

const TechButton = ({ children, func, state, num }) => {
  return (
    <ButtonTech
      onClick={func}
      style={
        state === num
          ? {
              backgroundColor: 'white',
              color: 'black',
            }
          : {}
      }
    >
      {children}
    </ButtonTech>
  );
};

export default TechButton;
