import styled from '@emotion/styled';

const RoundedButton = styled.button`
  background-color: white;
  width: 190px;
  height: 190px;
  padding: 50px;
  display: block;
  border-radius: 50%;
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  letter-spacing: 2px;
  cursor: pointer;
  animation: hamburger_plus 4s ease infinite;
  transition: all 1s ease;
  
  @keyframes hamburger_plus {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.4);
  }
}

&:hover{
  background-color: lightgray;
}


  @media only screen and (max-width: 480px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }


  &:hover{

}
`;

export default RoundedButton;
