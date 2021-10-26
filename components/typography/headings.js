import styled from "@emotion/styled"

const H1 = styled.h1`
  color: white;
  font-size: 10rem;
  font-family: 'Bellefair';
  text-transform: uppercase;
  @media only screen and (max-width: 480px) {
    font-size: 6rem;
  }
`

const H2 = styled.h1`
  color: white;
  font-size: 7rem;
  font-family: 'Bellefair';
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 4rem;
  }
`
const H3 = styled.h1`
  color: white;
  font-size: 4rem;
  font-family: 'Bellefair';
  text-transform: uppercase;
`
const H4 = styled.h1`
  color: white;
  font-size: 2.29rem;
  font-family: 'Bellefair';
  text-transform: uppercase;
  @media only screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`

const H5 = styled.h1`
  color: white;
  font-size: 1.9rem;
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  word-spacing: 0.4rem;
  letter-spacing: 0.25rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    color: #d0d6f9;
  }
`
export {H1, H2, H3, H4, H5}
