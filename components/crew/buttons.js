import styled from "@emotion/styled"

const CircleButton = styled.button`
    background-color: white;
    padding: 10px;
    border-radius: 100%;
    cursor: pointer;

    &:active{
        transform: scale(1.20);
    }
`


const CrewButton = ({ handleAstronaut }) => {
    return (
        <CircleButton onClick={handleAstronaut} />
    )
}

export default CrewButton
