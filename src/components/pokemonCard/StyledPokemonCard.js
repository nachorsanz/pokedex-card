import styled from 'styled-components';
import card from '../../assets/card.jpg';

const StyledPokedexCard = styled.div`
    .card {
        width: 220px;
        height: 310px;
        background-image: url(${card});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .namePokemon {
        margin-top: -4.5rem;
        text-transform: uppercase;
    }
    .imgPokemon img {
        width: 70%;
    }
`;

export default StyledPokedexCard;
